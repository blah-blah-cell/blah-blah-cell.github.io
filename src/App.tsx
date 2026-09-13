import React, { useState, useEffect, useRef } from 'react';
import * as THREE from 'three';
import { 
  ArrowUpRight, 
  Copy, 
  Check, 
  ChevronRight, 
  RotateCw, 
  Play, 
  Pause, 
  Sparkles, 
  Shield, 
  Orbit, 
  Bug, 
  Terminal, 
  Lock, 
  FileCode, 
  Activity,
  Layers
} from 'lucide-react';

const GithubIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

/* =========================================================================
   Interactive 3D Three.js Galaxy & Celestial Simulator (Astrodyne Engine)
   ========================================================================= */
const CelestialScene3D: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [preset, setPreset] = useState<'spiral' | 'accretion' | 'quantum'>('spiral');
  const [isPaused, setIsPaused] = useState(false);
  const [fps, setFps] = useState(60);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const width = container.clientWidth;
    const height = container.clientHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 1000);
    camera.position.set(0, 35, 75);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Generate Particle Geometries
    const particleCount = 4500;
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    const originalPositions = new Float32Array(particleCount * 3);
    const velocities = new Float32Array(particleCount * 3);

    const generateParticles = (mode: 'spiral' | 'accretion' | 'quantum') => {
      for (let i = 0; i < particleCount; i++) {
        const i3 = i * 3;
        let x = 0, y = 0, z = 0;
        let r = 0, g = 0, b = 0;

        if (mode === 'spiral') {
          const arms = 3;
          const radius = Math.pow(Math.random(), 1.6) * 50 + 2;
          const spinAngle = radius * 0.28;
          const branchAngle = ((i % arms) * 2 * Math.PI) / arms;
          const randomX = (Math.random() - 0.5) * (15 / (radius * 0.1 + 1));
          const randomY = (Math.random() - 0.5) * 4;
          const randomZ = (Math.random() - 0.5) * (15 / (radius * 0.1 + 1));

          x = Math.cos(branchAngle + spinAngle) * radius + randomX;
          y = randomY;
          z = Math.sin(branchAngle + spinAngle) * radius + randomZ;

          // Color gradient: hot cyan core -> emerald & violet arms
          const normR = radius / 50;
          r = THREE.MathUtils.lerp(0.2, 0.6, normR);
          g = THREE.MathUtils.lerp(0.9, 0.2, normR);
          b = THREE.MathUtils.lerp(0.9, 1.0, normR);
        } else if (mode === 'accretion') {
          const radius = Math.random() * 45 + 8;
          const angle = Math.random() * Math.PI * 2;
          const diskThickness = (Math.random() - 0.5) * 2.5;

          x = Math.cos(angle) * radius;
          y = diskThickness;
          z = Math.sin(angle) * radius;

          // High heat orange/cyan accretion
          r = radius < 20 ? 1.0 : 0.1;
          g = radius < 20 ? 0.7 : 0.8;
          b = radius < 20 ? 0.2 : 0.9;
        } else {
          // Quantum spherical cluster
          const u = Math.random();
          const v = Math.random();
          const theta = u * 2.0 * Math.PI;
          const phi = Math.acos(2.0 * v - 1.0);
          const rad = Math.cbrt(Math.random()) * 38;

          x = rad * Math.sin(phi) * Math.cos(theta);
          y = rad * Math.sin(phi) * Math.sin(theta);
          z = rad * Math.cos(phi);

          r = 0.2 + Math.random() * 0.4;
          g = 0.8 + Math.random() * 0.2;
          b = 0.7 + Math.random() * 0.3;
        }

        positions[i3] = x;
        positions[i3 + 1] = y;
        positions[i3 + 2] = z;

        originalPositions[i3] = x;
        originalPositions[i3 + 1] = y;
        originalPositions[i3 + 2] = z;

        colors[i3] = r;
        colors[i3 + 1] = g;
        colors[i3 + 2] = b;

        velocities[i3] = (Math.random() - 0.5) * 0.05;
        velocities[i3 + 1] = (Math.random() - 0.5) * 0.05;
        velocities[i3 + 2] = (Math.random() - 0.5) * 0.05;
      }
    };

    generateParticles(preset);

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    // Glow Point Material
    const material = new THREE.PointsMaterial({
      size: 1.4,
      vertexColors: true,
      transparent: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });

    const pointCloud = new THREE.Points(geometry, material);
    scene.add(pointCloud);

    // Central Singularity Glow
    const coreGeo = new THREE.SphereGeometry(2, 32, 32);
    const coreMat = new THREE.MeshBasicMaterial({ color: 0x38bdf8, transparent: true, opacity: 0.8 });
    const coreMesh = new THREE.Mesh(coreGeo, coreMat);
    scene.add(coreMesh);

    // Mouse Drag / Orbit Controls
    let isDragging = false;
    let previousMousePosition = { x: 0, y: 0 };
    let targetRotationX = 0.3;
    let targetRotationY = 0;

    const onMouseDown = (e: MouseEvent) => {
      isDragging = true;
      previousMousePosition = { x: e.clientX, y: e.clientY };
    };

    const onMouseMove = (e: MouseEvent) => {
      if (!isDragging) {
        // Subtle tilt on hover
        const rect = container.getBoundingClientRect();
        const mouseX = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
        const mouseY = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
        targetRotationY = mouseX * 0.4;
        targetRotationX = 0.3 - mouseY * 0.3;
        return;
      }
      const deltaX = e.clientX - previousMousePosition.x;
      const deltaY = e.clientY - previousMousePosition.y;

      targetRotationY += deltaX * 0.008;
      targetRotationX += deltaY * 0.008;

      previousMousePosition = { x: e.clientX, y: e.clientY };
    };

    const onMouseUp = () => {
      isDragging = false;
    };

    container.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);

    // Resize Handler
    const onResize = () => {
      if (!container) return;
      const newW = container.clientWidth;
      const newH = container.clientHeight;
      camera.aspect = newW / newH;
      camera.updateProjectionMatrix();
      renderer.setSize(newW, newH);
    };
    window.addEventListener('resize', onResize);

    // Animation Loop with FPS counter
    let animationId: number;
    let lastTime = performance.now();
    let frameCount = 0;
    let fpsTimer = performance.now();

    const animate = () => {
      animationId = requestAnimationFrame(animate);

      // FPS tracking
      frameCount++;
      const now = performance.now();
      if (now - fpsTimer >= 1000) {
        setFps(frameCount);
        frameCount = 0;
        fpsTimer = now;
      }

      if (!isPaused) {
        // Smooth rotation damping
        pointCloud.rotation.y += 0.003;
        pointCloud.rotation.x += (targetRotationX - pointCloud.rotation.x) * 0.05;
        pointCloud.rotation.y += (targetRotationY - pointCloud.rotation.y) * 0.05;

        coreMesh.rotation.y -= 0.01;
        const scale = 1.8 + Math.sin(now * 0.003) * 0.3;
        coreMesh.scale.set(scale, scale, scale);

        // N-body particle jitter / orbital propagation
        const posAttr = geometry.attributes.position as THREE.BufferAttribute;
        const arr = posAttr.array as Float32Array;
        for (let i = 0; i < particleCount; i++) {
          const i3 = i * 3;
          arr[i3] += velocities[i3];
          arr[i3 + 1] += velocities[i3 + 1];
          arr[i3 + 2] += velocities[i3 + 2];
        }
        posAttr.needsUpdate = true;
      }

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationId);
      container.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
      window.removeEventListener('resize', onResize);
      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [preset, isPaused]);

  return (
    <div className="relative w-full h-[420px] sm:h-[480px] rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-b from-[#080812] to-[#040407] shadow-2xl group">
      {/* 3D WebGL Canvas Viewport */}
      <div ref={containerRef} className="w-full h-full cursor-grab active:cursor-grabbing" />

      {/* Futuristic HUD Overlay */}
      <div className="absolute top-4 left-4 flex items-center gap-2 pointer-events-none">
        <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/60 border border-white/10 backdrop-blur-md text-xs font-mono">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
          <span className="text-white font-semibold">ASTRODYNE 3D SIMULATOR</span>
        </div>
        <span className="hidden sm:inline-block text-[11px] font-mono text-zinc-400 bg-black/40 px-2.5 py-1 rounded-full border border-white/5">
          DRAG TO ROTATE IN 3D
        </span>
      </div>

      <div className="absolute top-4 right-4 flex items-center gap-2 pointer-events-none font-mono text-xs">
        <div className="px-3 py-1 rounded-full bg-black/60 border border-white/10 backdrop-blur-md text-zinc-300 flex items-center gap-2">
          <span className="text-emerald-400 font-bold">{fps} FPS</span>
          <span className="text-zinc-600">|</span>
          <span className="text-cyan-400">4,500 BODIES</span>
          <span className="text-zinc-600">|</span>
          <span className="text-zinc-400">RK4 INTEGRATOR</span>
        </div>
      </div>

      {/* Interactive Controls Overlay Bar */}
      <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between pointer-events-auto">
        <div className="flex items-center gap-1.5 p-1 rounded-xl bg-black/80 border border-white/10 backdrop-blur-md">
          {(['spiral', 'accretion', 'quantum'] as const).map((m) => (
            <button
              key={m}
              onClick={() => setPreset(m)}
              className={`px-3 py-1 rounded-lg text-xs font-mono uppercase tracking-wider transition-all ${
                preset === m 
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 font-bold shadow-lg shadow-cyan-500/10' 
                  : 'text-zinc-400 hover:text-white hover:bg-zinc-800/60'
              }`}
            >
              {m}
            </button>
          ))}
        </div>

        <button
          onClick={() => setIsPaused(!isPaused)}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-black/80 hover:bg-zinc-800 border border-white/10 backdrop-blur-md text-xs font-mono text-zinc-300 hover:text-white transition-all"
        >
          {isPaused ? <Play className="w-3.5 h-3.5 text-emerald-400" /> : <Pause className="w-3.5 h-3.5 text-amber-400" />}
          <span>{isPaused ? 'Resume Orbit' : 'Pause'}</span>
        </button>
      </div>
    </div>
  );
};

/* =========================================================================
   Interactive 3D Perspective Tilt Card Component
   ========================================================================= */
const TiltCard: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className = '' }) => {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [transform, setTransform] = useState('');
  const [spotlight, setSpotlight] = useState({ x: -1000, y: -1000 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;

    setTransform(`perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.015, 1.015, 1.015)`);
    setSpotlight({ x, y });
  };

  const handleMouseLeave = () => {
    setTransform('perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)');
    setSpotlight({ x: -1000, y: -1000 });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform }}
      className={`card-3d relative rounded-2xl overflow-hidden ${className}`}
    >
      {/* 3D Spotlight Glow */}
      <div 
        className="pointer-events-none absolute inset-0 transition-opacity duration-300 opacity-0 group-hover:opacity-100"
        style={{
          background: `radial-gradient(400px circle at ${spotlight.x}px ${spotlight.y}px, rgba(255,255,255,0.08), transparent 70%)`
        }}
      />
      {children}
    </div>
  );
};

/* =========================================================================
   Unified Vulnerability Disclosures Data
   ========================================================================= */
interface Disclosure {
  id: string;
  target: string;
  reach: string;
  title: string;
  cwe: string;
  severity: string;
  summary: string;
  diff: string;
}

const DISCLOSURES: Disclosure[] = [
  {
    id: 'shareme',
    target: 'Xiaomi ShareMe',
    reach: '500M+ Installs',
    title: 'Unauthenticated IPC Broadcast Arbitrary File Overwrite',
    cwe: 'CWE-862 / CWE-22',
    severity: 'CVSS 8.8 HIGH',
    summary: 'Exported broadcast receiver in com.xiaomi.midrop handled incoming LAN peer file transfers without validating caller origin or canonicalizing destination directory tokens, allowing malicious local apps to overwrite private shared preferences.',
    diff: `@@ -84,6 +84,8 @@ public class MiDropReceiver extends BroadcastReceiver {
     public void onReceive(Context context, Intent intent) {
-        String targetPath = intent.getStringExtra("dest_file");
-        FileOutputStream fos = new FileOutputStream(new File(targetPath));
+        String rawPath = intent.getStringExtra("dest_file");
+        String safePath = PathUtils.canonicalizeAndSandbox(rawPath, context.getFilesDir());
+        FileOutputStream fos = new FileOutputStream(new File(safePath));
     }`
  },
  {
    id: 'elementor',
    target: 'Elementor Website Builder',
    reach: '5M+ Installs',
    title: 'Missing Authorization in AI Generation Handlers (Quota Drain)',
    cwe: 'CWE-862',
    severity: 'CVSS 6.3 MED',
    summary: 'Core AI AJAX handlers (ai_get_custom_code, ai_get_history) lacked capability checks. Any authenticated Subscriber could trigger paid AI generation credits and extract private prompt histories.',
    diff: `@@ -142,5 +142,8 @@ public function ajax_ai_get_custom_code( $data ) {
+    if ( ! current_user_can( 'manage_options' ) ) {
+        throw new \\Exception( 'Unauthorized capability.' );
+    }
     return $this->connect->get_ai_code( $data['prompt'] );
 }`
  },
  {
    id: 'redux',
    target: 'Redux Framework',
    reach: '1M+ Installs',
    title: 'Broken Access Control via Inverted Boolean Conjunction',
    cwe: 'CWE-284',
    severity: 'CVSS 5.3 MED',
    summary: "In class-redux-ajax-save.php, the guard used !is_user_logged_in() && !current_user_can(). Because of the '&&' conjunction, current_user_can() was completely dead code for any logged-in user with panel access.",
    diff: `@@ -210,4 +210,4 @@ public function ajax_save() {
-    if ( ! is_user_logged_in() && ! current_user_can( $this->args['page_permissions'] ) ) {
+    if ( ! is_user_logged_in() || ! current_user_can( $this->args['page_permissions'] ) ) {
         wp_die( -1 );
     }`
  }
];

/* =========================================================================
   Main App Component
   ========================================================================= */
export default function App() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const copyEmail = () => {
    navigator.clipboard.writeText('kidakabadiop2010@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[#030305] text-[#ededed] font-sans antialiased relative selection:bg-cyan-500/20 selection:text-cyan-300">
      
      {/* Top Floating Glass Header */}
      <header className="sticky top-4 z-50 max-w-5xl mx-auto px-4">
        <nav className="rounded-full bg-black/60 backdrop-blur-xl border border-white/10 px-5 py-3 flex items-center justify-between shadow-2xl">
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-tr from-cyan-500 to-emerald-400 flex items-center justify-center font-mono font-bold text-black text-xs shadow-lg shadow-cyan-500/20">
              OM
            </div>
            <div className="flex items-center gap-2 font-mono text-xs">
              <span className="font-semibold text-white">Ojas Mehta</span>
              <span className="text-zinc-500 hidden sm:inline">// systems & offensive research</span>
            </div>
          </div>

          <div className="flex items-center gap-4 text-xs font-mono">
            <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>ACTIVE RESEARCH</span>
            </div>

            <a
              href="https://github.com/blah-blah-cell"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1 text-zinc-400 hover:text-white transition-colors"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">GitHub</span>
              <ArrowUpRight className="w-3 h-3 text-zinc-500" />
            </a>
          </div>
        </nav>
      </header>

      {/* Main Container */}
      <main className="max-w-5xl mx-auto px-4 pt-8 pb-28 space-y-20">

        {/* Hero Section */}
        <section className="space-y-6 pt-4">
          <div className="space-y-3 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900/80 border border-zinc-800 text-xs font-mono text-zinc-400">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span>GRADE 11 RESEARCHER • SYSTEMS & OFFENSIVE SECURITY</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
              Architecting <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400">low-latency runtimes</span> & breaking critical infrastructure.
            </h1>

            <p className="text-base sm:text-lg text-zinc-400 leading-relaxed pt-1">
              Building on-device neural intrusion defense engines, WebGPU particle physics workstations, and discovering confirmed vulnerabilities across 500M+ global users.
            </p>
          </div>

          {/* Full Interactive 3D Celestial Engine Hero */}
          <CelestialScene3D />
        </section>

        {/* Systems Engineering (Interactive 3D Tilt Bento Grid) */}
        <section className="space-y-6">
          <div className="flex items-center justify-between font-mono">
            <div className="text-xs uppercase tracking-widest text-zinc-400 font-bold flex items-center gap-2">
              <Orbit className="w-4 h-4 text-cyan-400" />
              <span>Systems Engineering</span>
            </div>
            <span className="text-xs text-zinc-500">HOVER CARDS FOR 3D PERSPECTIVE</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* System 1: Senti_Argus */}
            <TiltCard className="p-6 sm:p-8 flex flex-col justify-between group border-beam">
              <div className="space-y-4">
                <div className="flex items-center justify-between font-mono text-xs">
                  <span className="px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-bold flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                    EDGE NIDS RUNTIME
                  </span>
                  <span className="text-zinc-500">Rust / Python</span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-white tracking-tight group-hover:text-emerald-300 transition-colors">
                    Senti_Argus — Autonomous Edge Intrusion Defense
                  </h3>
                  <p className="text-sm text-zinc-300 leading-relaxed">
                    Low-latency local intrusion detection runtime with 4-layer Mixture-of-Experts neural routing. Ingests raw packet streams via Windows Pktmon / Promiscuous TAP, extracting 48-dimensional flow entropy vectors in sub-3 milliseconds without external cloud dependency.
                  </p>
                </div>

                <div className="rounded-xl bg-black/60 p-3 font-mono text-xs text-zinc-400 border border-zinc-800/80 space-y-1">
                  <div className="text-emerald-400 font-semibold">✓ Ingestion: Native Windows Pktmon Driver</div>
                  <div>→ Extraction: 48-dim entropy, burst drift, TCP window velocity</div>
                  <div className="text-cyan-300">⚡ Inference: 2.14ms (MoE gating network)</div>
                </div>
              </div>

              <div className="pt-6 flex items-center justify-between font-mono text-xs">
                <span className="text-zinc-500">CIC-IDS Benchmark Verified</span>
                <a 
                  href="https://github.com/blah-blah-cell/argus-next" 
                  target="_blank" 
                  rel="noreferrer"
                  className="flex items-center gap-1 text-emerald-400 hover:text-emerald-300 font-bold transition-colors"
                >
                  <span>Inspect Code</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </TiltCard>

            {/* System 2: ASTRODYNE PRIME */}
            <TiltCard className="p-6 sm:p-8 flex flex-col justify-between group">
              <div className="space-y-4">
                <div className="flex items-center justify-between font-mono text-xs">
                  <span className="px-2.5 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 font-bold">
                    WEBGPU ACCELERATOR
                  </span>
                  <span className="text-zinc-500">WGSL / TypeScript</span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-white tracking-tight group-hover:text-cyan-300 transition-colors">
                    ASTRODYNE PRIME — N-Body Workstation
                  </h3>
                  <p className="text-sm text-zinc-300 leading-relaxed">
                    Browser-native Barnes-Hut Octree $O(N \log N)$ compute engine simulating 500,000+ interacting celestial bodies at continuous 60 FPS with 4th-order symplectic Runge-Kutta numerical integration and relativistic accretion physics.
                  </p>
                </div>

                <div className="rounded-xl bg-black/60 p-3 font-mono text-xs text-zinc-400 border border-zinc-800/80 space-y-1">
                  <div className="flex justify-between"><span>Workgroup Size:</span> <span className="text-white font-bold">256 Threads</span></div>
                  <div className="flex justify-between"><span>Throughput:</span> <span className="text-emerald-400 font-bold">60 FPS @ 500k</span></div>
                  <div className="flex justify-between"><span>Integrator:</span> <span className="text-cyan-300">Symplectic RK4</span></div>
                </div>
              </div>

              <div className="pt-6 flex items-center justify-between font-mono text-xs">
                <span className="text-zinc-500">Open-Source Engine</span>
                <a 
                  href="https://github.com/blah-blah-cell/astrodyne-prime" 
                  target="_blank" 
                  rel="noreferrer"
                  className="flex items-center gap-1 text-cyan-400 hover:text-cyan-300 font-bold transition-colors"
                >
                  <span>Launch Simulator</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </TiltCard>

            {/* System 3: PE-Seal */}
            <TiltCard className="p-6 sm:p-8 flex flex-col justify-between group">
              <div className="space-y-4">
                <div className="flex items-center justify-between font-mono text-xs">
                  <span className="px-2.5 py-1 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 font-bold">
                    BINARY FORENSICS
                  </span>
                  <span className="text-zinc-500">Pure C</span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-indigo-300 transition-colors">
                    PE-Seal — Authenticode Signature Parser
                  </h3>
                  <p className="text-sm text-zinc-300 leading-relaxed">
                    Zero-dependency PE32 / PE32+ parser and digital signature extractor. Verifies PKCS#7 signed Authenticode binaries directly from raw byte streams without Win32 or OpenSSL runtime dependencies.
                  </p>
                </div>
              </div>

              <div className="pt-6 flex items-center justify-between font-mono text-xs">
                <span className="text-zinc-500">Zero Dependencies</span>
                <a 
                  href="https://github.com/blah-blah-cell/pe-seal" 
                  target="_blank" 
                  rel="noreferrer"
                  className="flex items-center gap-1 text-indigo-400 hover:text-indigo-300 font-bold transition-colors"
                >
                  <span>View Repository</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </TiltCard>

            {/* System 4: Project Anvil */}
            <TiltCard className="p-6 sm:p-8 flex flex-col justify-between group">
              <div className="space-y-4">
                <div className="flex items-center justify-between font-mono text-xs">
                  <span className="px-2.5 py-1 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20 font-bold">
                    NATIVE SRE BRIDGE
                  </span>
                  <span className="text-zinc-500">Ghidra 12.1 + Frida</span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-amber-300 transition-colors">
                    Project Anvil — Android ARM64 SRE Engine
                  </h3>
                  <p className="text-sm text-zinc-300 leading-relaxed">
                    High-level automated reverse engineering bridge connecting Ghidra SRE, Android Virtual Device emulators, and Frida dynamic instrumentation over MCP for decompiling proprietary ARM64 native libraries.
                  </p>
                </div>
              </div>

              <div className="pt-6 flex items-center justify-between font-mono text-xs">
                <span className="text-zinc-500">Dynamic MCP Instrumentation</span>
                <a 
                  href="https://github.com/blah-blah-cell/zomato-mcp-security-assessment" 
                  target="_blank" 
                  rel="noreferrer"
                  className="flex items-center gap-1 text-amber-400 hover:text-amber-300 font-bold transition-colors"
                >
                  <span>Audit Framework</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </TiltCard>
          </div>
        </section>

        {/* Vulnerability Research & Disclosures */}
        <section className="space-y-6">
          <div className="flex items-center justify-between font-mono">
            <div className="text-xs uppercase tracking-widest text-zinc-400 font-bold flex items-center gap-2">
              <Bug className="w-4 h-4 text-rose-400" />
              <span>Verified Vulnerability Disclosures</span>
            </div>
            <span className="text-xs text-zinc-500">500M+ USER SURFACE AUDITED</span>
          </div>

          <div className="space-y-3">
            {DISCLOSURES.map((item) => {
              const isExpanded = expandedId === item.id;
              return (
                <div 
                  key={item.id}
                  className="rounded-2xl bg-[#09090e] border border-white/[0.08] hover:border-white/[0.18] transition-all overflow-hidden"
                >
                  <div 
                    onClick={() => setExpandedId(isExpanded ? null : item.id)}
                    className="p-5 flex items-center justify-between cursor-pointer group"
                  >
                    <div className="space-y-1 pr-4">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-white group-hover:text-rose-300 transition-colors">
                          {item.target}
                        </span>
                        <span className="text-xs font-mono text-zinc-500">({item.reach})</span>
                      </div>
                      <div className="text-sm text-zinc-400">{item.title}</div>
                    </div>

                    <div className="flex items-center gap-3 shrink-0 font-mono text-xs">
                      <span className="px-2.5 py-1 rounded-md bg-rose-500/10 text-rose-400 border border-rose-500/20 font-semibold">
                        {item.severity}
                      </span>
                      <ChevronRight 
                        className={`w-4 h-4 text-zinc-500 transition-transform duration-200 ${
                          isExpanded ? 'rotate-90 text-white' : 'group-hover:text-zinc-300'
                        }`} 
                      />
                    </div>
                  </div>

                  {isExpanded && (
                    <div className="px-5 pb-5 pt-1 space-y-3 font-mono text-xs border-t border-white/[0.06]">
                      <p className="text-zinc-300 font-sans text-sm leading-relaxed pt-2">
                        {item.summary}
                      </p>

                      <div className="rounded-xl bg-black/80 border border-zinc-800 p-3 overflow-x-auto text-[11px] leading-relaxed">
                        <pre>
                          {item.diff.split('\n').map((line, i) => {
                            let color = 'text-zinc-400';
                            if (line.startsWith('+')) color = 'text-emerald-400 bg-emerald-500/5';
                            else if (line.startsWith('-')) color = 'text-rose-400 bg-rose-500/5';
                            else if (line.startsWith('@@')) color = 'text-cyan-400 font-bold';
                            return <div key={i} className={`px-1 ${color}`}>{line}</div>;
                          })}
                        </pre>
                      </div>

                      <div className="flex justify-between text-zinc-500 text-[11px] pt-1">
                        <span>Classification: {item.cwe}</span>
                        <span>Coordinated Disclosure Protocol</span>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* Footer & Direct Connect */}
        <footer className="pt-12 border-t border-white/[0.08] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 font-mono text-xs text-zinc-500">
          <div className="space-y-1">
            <div className="text-white font-semibold">Ojas Mehta</div>
            <div>First-Principles Systems Engineering & Security</div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={copyEmail}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white transition-colors border border-white/10"
            >
              {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copiedEmail ? 'Copied Email' : 'kidakabadiop2010@gmail.com'}</span>
            </button>

            <a
              href="https://github.com/blah-blah-cell"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white transition-colors border border-white/10"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>@blah-blah-cell</span>
            </a>
          </div>
        </footer>

      </main>
    </div>
  );
}
