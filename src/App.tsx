import React, { useState, useEffect, useRef } from 'react';
import * as THREE from 'three';
import { 
  Shield, 
  Bug, 
  Terminal, 
  Lock, 
  FileCode, 
  ArrowUpRight, 
  Copy, 
  Check, 
  ChevronRight, 
  Play, 
  Pause, 
  Sparkles, 
  AlertTriangle,
  Radio,
  Cpu,
  Boxes,
  Key
} from 'lucide-react';

const GithubIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

/* =========================================================================
   Interactive 3D Cyber Threat Matrix & Attack Graph Canvas (Three.js)
   ========================================================================= */
const CyberThreatScene3D: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [mode, setMode] = useState<'matrix' | 'lattice' | 'core'>('matrix');
  const [isPaused, setIsPaused] = useState(false);
  const [fps, setFps] = useState(60);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const width = container.clientWidth;
    const height = container.clientHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(55, width / height, 0.1, 1000);
    camera.position.set(0, 25, 65);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    const nodeCount = 3600;
    const positions = new Float32Array(nodeCount * 3);
    const colors = new Float32Array(nodeCount * 3);
    const velocities = new Float32Array(nodeCount * 3);

    const generateCyberGraph = (type: 'matrix' | 'lattice' | 'core') => {
      for (let i = 0; i < nodeCount; i++) {
        const i3 = i * 3;
        let x = 0, y = 0, z = 0;
        let r = 0, g = 0, b = 0;

        if (type === 'matrix') {
          // Multidimensional Network Flow Sphere with Toroidal Rings
          const radius = Math.pow(Math.random(), 0.6) * 42 + 4;
          const theta = Math.random() * Math.PI * 2;
          const phi = Math.acos(Math.random() * 2 - 1);

          x = radius * Math.sin(phi) * Math.cos(theta);
          y = radius * Math.sin(phi) * Math.sin(theta) * 0.45;
          z = radius * Math.cos(phi);

          // Emerald / Cyan with occasional Rose vulnerability indicators
          if (i % 30 === 0) {
            // Vulnerability Anomaly Node (Rose)
            r = 0.95; g = 0.2; b = 0.35;
          } else if (i % 2 === 0) {
            // Verified Edge Packet Flow (Emerald)
            r = 0.1; g = 0.85; b = 0.55;
          } else {
            // Inspected Protocol Stream (Cyan)
            r = 0.2; g = 0.75; b = 0.98;
          }
        } else if (type === 'lattice') {
          // Cylindrical Protocol Telemetry Column
          const angle = Math.random() * Math.PI * 2;
          const rad = Math.sqrt(Math.random()) * 30 + 5;
          const h = (Math.random() - 0.5) * 60;

          x = Math.cos(angle) * rad;
          y = h;
          z = Math.sin(angle) * rad;

          r = 0.15; g = 0.9; b = 0.6;
        } else {
          // Dense Memory Allocation Core
          const u = Math.random();
          const v = Math.random();
          const theta = u * 2.0 * Math.PI;
          const phi = Math.acos(2.0 * v - 1.0);
          const rad = Math.cbrt(Math.random()) * 32;

          x = rad * Math.sin(phi) * Math.cos(theta);
          y = rad * Math.sin(phi) * Math.sin(theta);
          z = rad * Math.cos(phi);

          r = 0.3; g = 0.7; b = 1.0;
        }

        positions[i3] = x;
        positions[i3 + 1] = y;
        positions[i3 + 2] = z;

        colors[i3] = r;
        colors[i3 + 1] = g;
        colors[i3 + 2] = b;

        velocities[i3] = (Math.random() - 0.5) * 0.04;
        velocities[i3 + 1] = (Math.random() - 0.5) * 0.04;
        velocities[i3 + 2] = (Math.random() - 0.5) * 0.04;
      }
    };

    generateCyberGraph(mode);

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const material = new THREE.PointsMaterial({
      size: 1.5,
      vertexColors: true,
      transparent: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });

    const networkMesh = new THREE.Points(geometry, material);
    scene.add(networkMesh);

    // Central Security Hub Wireframe
    const coreGeo = new THREE.IcosahedronGeometry(7, 1);
    const coreWire = new THREE.WireframeGeometry(coreGeo);
    const lineMat = new THREE.LineBasicMaterial({ color: 0x10b981, transparent: true, opacity: 0.25 });
    const coreLines = new THREE.LineSegments(coreWire, lineMat);
    scene.add(coreLines);

    // Mouse drag / 3D orbit controls
    let isDragging = false;
    let previousMouse = { x: 0, y: 0 };
    let targetRotY = 0;
    let targetRotX = 0.2;

    const onMouseDown = (e: MouseEvent) => {
      isDragging = true;
      previousMouse = { x: e.clientX, y: e.clientY };
    };

    const onMouseMove = (e: MouseEvent) => {
      if (!isDragging) {
        const rect = container.getBoundingClientRect();
        const mx = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
        const my = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
        targetRotY = mx * 0.45;
        targetRotX = 0.2 - my * 0.35;
        return;
      }
      const dx = e.clientX - previousMouse.x;
      const dy = e.clientY - previousMouse.y;
      targetRotY += dx * 0.007;
      targetRotX += dy * 0.007;
      previousMouse = { x: e.clientX, y: e.clientY };
    };

    const onMouseUp = () => { isDragging = false; };

    container.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);

    const onResize = () => {
      if (!container) return;
      const nw = container.clientWidth;
      const nh = container.clientHeight;
      camera.aspect = nw / nh;
      camera.updateProjectionMatrix();
      renderer.setSize(nw, nh);
    };
    window.addEventListener('resize', onResize);

    let animationId: number;
    let frameCount = 0;
    let lastFpsTime = performance.now();

    const animate = () => {
      animationId = requestAnimationFrame(animate);

      frameCount++;
      const now = performance.now();
      if (now - lastFpsTime >= 1000) {
        setFps(frameCount);
        frameCount = 0;
        lastFpsTime = now;
      }

      if (!isPaused) {
        networkMesh.rotation.y += 0.0025;
        networkMesh.rotation.x += (targetRotX - networkMesh.rotation.x) * 0.05;
        networkMesh.rotation.y += (targetRotY - networkMesh.rotation.y) * 0.05;

        coreLines.rotation.x += 0.004;
        coreLines.rotation.y -= 0.005;

        const posAttr = geometry.attributes.position as THREE.BufferAttribute;
        const arr = posAttr.array as Float32Array;
        for (let i = 0; i < nodeCount; i++) {
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
  }, [mode, isPaused]);

  return (
    <div className="relative w-full h-[400px] sm:h-[460px] rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-b from-[#06060c] to-[#020204] shadow-2xl group">
      <div ref={containerRef} className="w-full h-full cursor-grab active:cursor-grabbing" />

      {/* Top Cyber Telemetry Badges */}
      <div className="absolute top-4 left-4 flex items-center gap-2 pointer-events-none">
        <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/70 border border-white/10 backdrop-blur-md text-xs font-mono">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          <span className="text-white font-bold">ATTACK GRAPH // TELEMETRY MESH</span>
        </div>
        <span className="hidden sm:inline-block text-[11px] font-mono text-zinc-400 bg-black/50 px-2.5 py-1 rounded-full border border-white/5">
          DRAG TO ROTATE IN 3D
        </span>
      </div>

      <div className="absolute top-4 right-4 flex items-center gap-2 pointer-events-none font-mono text-xs">
        <div className="px-3 py-1 rounded-full bg-black/70 border border-white/10 backdrop-blur-md text-zinc-300 flex items-center gap-2">
          <span className="text-emerald-400 font-bold">{fps} FPS</span>
          <span className="text-zinc-600">|</span>
          <span className="text-cyan-400">3,600 NODES</span>
          <span className="text-zinc-600">|</span>
          <span className="text-rose-400">500M+ AUDITED REACH</span>
        </div>
      </div>

      {/* Bottom Mode Switcher */}
      <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between pointer-events-auto font-mono text-xs">
        <div className="flex items-center gap-1.5 p-1 rounded-xl bg-black/80 border border-white/10 backdrop-blur-md">
          {(['matrix', 'lattice', 'core'] as const).map((m) => (
            <button
              key={m}
              onClick={() => setMode(m)}
              className={`px-3 py-1 rounded-lg uppercase tracking-wider transition-all ${
                mode === m 
                  ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 font-bold shadow-lg shadow-emerald-500/10' 
                  : 'text-zinc-400 hover:text-white hover:bg-zinc-800/60'
              }`}
            >
              {m === 'matrix' ? 'Attack Surface' : m === 'lattice' ? 'Packet Stream' : 'Memory Mesh'}
            </button>
          ))}
        </div>

        <button
          onClick={() => setIsPaused(!isPaused)}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-black/80 hover:bg-zinc-800 border border-white/10 backdrop-blur-md text-zinc-300 hover:text-white transition-all"
        >
          {isPaused ? <Play className="w-3.5 h-3.5 text-emerald-400" /> : <Pause className="w-3.5 h-3.5 text-amber-400" />}
          <span>{isPaused ? 'Resume' : 'Pause'}</span>
        </button>
      </div>
    </div>
  );
};

/* =========================================================================
   3D Tilt Card Component
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

    const rotateX = ((y - centerY) / centerY) * -8;
    const rotateY = ((x - centerX) / centerX) * 8;

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
      <div 
        className="pointer-events-none absolute inset-0 transition-opacity duration-300 opacity-0 group-hover:opacity-100"
        style={{
          background: `radial-gradient(400px circle at ${spotlight.x}px ${spotlight.y}px, rgba(16, 185, 129, 0.08), transparent 70%)`
        }}
      />
      {children}
    </div>
  );
};

/* =========================================================================
   Security Vulnerability Disclosures Data (Exclusively Vulnerabilities)
   ========================================================================= */
interface Disclosure {
  id: string;
  target: string;
  installBase: string;
  title: string;
  cwe: string;
  severity: string;
  protocol: string;
  summary: string;
  diff: string;
}

const DISCLOSURES: Disclosure[] = [
  {
    id: 'cve-pending-01',
    target: '[REDACTED OEM VENDOR]',
    installBase: '500M+ Devices Impacted',
    title: 'Unauthenticated IPC Boundary Traversal & Arbitrary File Overwrite',
    cwe: 'CWE-862 (Missing Auth) + CWE-22 (Path Traversal)',
    severity: 'CVSS 8.8 HIGH',
    protocol: 'Coordinated Vulnerability Disclosure (Under Active Embargo)',
    summary: 'Discovered an unauthenticated IPC boundary flaw in a pre-installed OEM Android system utility with over 500 million active device installs. Because caller identity was not restricted and destination directory tokens were uncanonicalized, local applications could escape sandbox constraints. Technical details, vendor identity, and reproduction steps are withheld under responsible disclosure embargo pending security patch distribution.',
    diff: `// [EMBARGOED UNDER ISO/IEC 29147 CVD GUIDELINES]
// Vendor: Confidential (OEM Mobile Ecosystem)
// Impact: Local unauthenticated IPC arbitrary file write
// Status: Reported to Vendor MSRC - Awaiting Public Patch Release`
  },
  {
    id: 'cve-pending-02',
    target: '[REDACTED CMS PLUGIN]',
    installBase: '5M+ Active Installs',
    title: 'Missing Authorization in Cloud AI Handlers (Quota Exhaustion & Exfiltration)',
    cwe: 'CWE-862 (Missing Authorization)',
    severity: 'CVSS 6.3 MED',
    protocol: 'Coordinated Vulnerability Disclosure (Under Active Embargo)',
    summary: 'Identified missing capability authorization checks in commercial cloud AI generation handlers. While layout and template endpoints enforced strict permissions, AI code generation allowed unprivileged authenticated roles to deplete commercial API credits. Technical details withheld under active embargo.',
    diff: `// [EMBARGOED UNDER ISO/IEC 29147 CVD GUIDELINES]
// Vendor: Confidential (Web CMS Ecosystem)
// Impact: Unprivileged commercial API credit depletion
// Status: Triaged via mVDP - Awaiting Public Patch Release`
  },
  {
    id: 'cve-pending-03',
    target: '[REDACTED FRAMEWORK CORE]',
    installBase: '1M+ Active Installs',
    title: 'Broken Access Control via Inverted Boolean Conjunction',
    cwe: 'CWE-284 (Improper Access Control)',
    severity: 'CVSS 5.3 MED',
    protocol: 'Coordinated Vulnerability Disclosure (Under Active Embargo)',
    summary: 'Reverse-engineered authorization logic in an administrative option handler where a compound conditional operator evaluated to dead code for authenticated users. Technical details withheld under active embargo.',
    diff: `// [EMBARGOED UNDER ISO/IEC 29147 CVD GUIDELINES]
// Vendor: Confidential (Web Framework)
// Impact: Low-privileged administrative option tampering
// Status: Triaged via mVDP - Awaiting Public Patch Release`
  },
  {
    id: 'cve-pending-04',
    target: '[REDACTED ASSET UTILITY]',
    installBase: '100k+ Active Installs',
    title: 'Unauthenticated API Dispatch & Hardcoded Third-Party Credentials',
    cwe: 'CWE-862 (Missing Auth) + CWE-798 (Hardcoded Credentials)',
    severity: 'CVSS 5.3 MED',
    protocol: 'Coordinated Vulnerability Disclosure (Under Active Embargo)',
    summary: 'Discovered missing authentication guards and embedded vendor API tokens in a popular asset management utility, enabling unauthenticated callers to execute external API queries using the host credentials. Details withheld under active embargo.',
    diff: `// [EMBARGOED UNDER ISO/IEC 29147 CVD GUIDELINES]
// Vendor: Confidential
// Impact: Unauthenticated external API dispatch
// Status: Triaged via mVDP - Awaiting Public Patch Release`
  },
  {
    id: 'nested-property',
    target: 'nested-property',
    installBase: '4M+ Downloads',
    title: '0-Day Incomplete Fix Prototype Pollution on Global Runtimes',
    cwe: 'CWE-1321 (Improper Modification of Object Prototype)',
    severity: '0-DAY',
    protocol: 'Public Security Advisory (broken-nest)',
    summary: 'Demonstrated that patches for nested-property v4.0.0 only filtered the __proto__ token, permitting full constructor.prototype access chains. Allowed unauthenticated attackers to pollute Array.prototype and Function.prototype across Node.js runtime globals.',
    diff: `// Public Research PoC (blah-blah-cell/broken-nest):
const nested = require('nested-property');
let payload = {};
nested.set(payload, 'constructor.prototype.polluted', true);
console.log({}.polluted); // Returns true (runtime globally poisoned)`
  }
];

const CODE_DOSSIER = [
  {
    name: 'pe_seal_core.py',
    lang: 'Python / Forensic SRE',
    desc: 'PE-Seal zero-dependency Authenticode PE32/PE32+ certificate directory validator',
    code: `import struct

def parse_authenticode_dir(pe_bytes: bytes) -> dict:
    """
    Extracts security directory entry without third-party libraries.
    Parses WIN_CERTIFICATE header to locate PKCS#7 SignedData payload.
    """
    e_lfanew = struct.unpack_from("<I", pe_bytes, 0x3C)[0]
    magic = struct.unpack_from("<H", pe_bytes, e_lfanew + 0x18)[0]
    is_pe32_plus = (magic == 0x20B)
    
    sec_dir_offset = e_lfanew + 0x18 + (144 if is_pe32_plus else 128)
    virt_addr, size = struct.unpack_from("<II", pe_bytes, sec_dir_offset)
    
    if size == 0:
        return {"status": "UNSIGNED", "length": 0}
        
    cert_len, cert_rev, cert_type = struct.unpack_from("<IHH", pe_bytes, virt_addr)
    return {
        "status": "AUTHENTICODE_PRESENT",
        "length": cert_len,
        "revision": hex(cert_rev),
        "type": "WIN_CERT_TYPE_PKCS_SIGNED_DATA" if cert_type == 0x0002 else hex(cert_type)
    }`
  },
  {
    name: 'argus_gating_kernel.rs',
    lang: 'Rust / Edge Defense',
    desc: 'Senti_Argus sub-3ms Mixture-of-Experts packet evaluation engine',
    code: `pub struct MoERouter {
    threshold: f32,
    anomaly_gate: AnomalyGateNetwork,
    experts: Vec<Box<dyn PacketExpert + Send + Sync>>,
}

impl MoERouter {
    #[inline(always)]
    pub fn evaluate_flow(&self, vector: &FlowFeatures) -> Verdict {
        // Hardware fast-path Authenticode & CIDR short-circuit (<0.1ms)
        if vector.is_whitelisted() {
            return Verdict::Allow { latency_us: 42 };
        }

        let weights = self.anomaly_gate.infer_weights(vector);
        let composite_score: f32 = self.experts.iter().zip(weights)
            .map(|(e, w)| e.score(vector) * w)
            .sum();

        if composite_score >= self.threshold {
            Verdict::Drop { score: composite_score }
        } else {
            Verdict::Monitor
        }
    }
}`
  },
  {
    name: 'anvil_frida_tracer.js',
    lang: 'JavaScript / Frida',
    desc: 'Project Anvil: ARM64 JNI memory integrity & anti-tamper observation hook',
    code: `// Project Anvil — Android Native SRE Dynamic Observation Hook
// Target: ARM64 libnative_guard.so

const targetLib = Process.findModuleByName("libnative_guard.so");
if (targetLib) {
    const sym = targetLib.findExportByName("Java_com_example_app_SecurityBridge_verifyPayload");
    if (sym) {
        Interceptor.attach(sym, {
            onEnter: function(args) {
                console.log("[Anvil::JNI] verifyPayload() invoked.");
                console.log("  arg0 (JNIEnv*): " + args[0]);
                console.log("  arg2 (jstring target): " + Memory.readCString(args[2]));
            },
            onLeave: function(retval) {
                console.log("  -> Verification Return Value: " + retval);
            }
        });
    }
}`
  }
];

export default function App() {
  const [activeTab, setActiveTab] = useState<'disclosures' | 'systems' | 'dossier' | 'manifest'>('disclosures');
  const [activeDossier, setActiveDossier] = useState(0);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [expandedId, setExpandedId] = useState<string | null>('nested-property');
  const [activeCodeTab, setActiveCodeTab] = useState(0);
  const [copiedCode, setCopiedCode] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText('kidakabadiop2010@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const copyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[#030305] text-[#ededed] font-sans antialiased relative selection:bg-emerald-500/20 selection:text-emerald-300">
      
      {/* Top Header */}
      <header className="sticky top-4 z-50 max-w-5xl mx-auto px-4">
        <nav className="rounded-full bg-black/70 backdrop-blur-xl border border-white/10 px-5 py-3 flex items-center justify-between shadow-2xl">
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-tr from-emerald-500 to-cyan-400 flex items-center justify-center font-mono font-bold text-black text-xs shadow-lg shadow-emerald-500/20">
              OM
            </div>
            <div className="flex items-center gap-2 font-mono text-xs">
              <span className="font-semibold text-white">Ojas Mehta</span>
              <span className="text-zinc-500 hidden sm:inline">// security researcher & systems</span>
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

        {/* Hero Section: 100% Security & Vulnerability Research Focus */}
        <section className="space-y-6 pt-4">
          <div className="space-y-3 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900/80 border border-zinc-800 text-xs font-mono text-zinc-400">
              <Shield className="w-3.5 h-3.5 text-emerald-400" />
              <span>VULNERABILITY RESEARCH • REVERSE ENGINEERING • DEFENSIVE SYSTEMS</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
              Uncovering critical flaws in <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">500M+ user infrastructure</span>.
            </h1>

            <p className="text-base sm:text-lg text-zinc-400 leading-relaxed pt-1">
              Security researcher specializing in white-box source auditing, native ARM64 binary reverse engineering, and architecting low-latency edge intrusion defense runtimes.
            </p>
          </div>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 font-mono text-xs">
            <div className="p-4 rounded-2xl bg-zinc-900/50 border border-white/[0.06]">
              <div className="text-2xl sm:text-3xl font-bold text-white">500M+</div>
              <div className="text-zinc-400 mt-1">Audited User Surface</div>
            </div>
            <div className="p-4 rounded-2xl bg-zinc-900/50 border border-white/[0.06]">
              <div className="text-2xl sm:text-3xl font-bold text-emerald-400">CVSS 8.8</div>
              <div className="text-zinc-400 mt-1">Highest Confirmed Severity</div>
            </div>
            <div className="p-4 rounded-2xl bg-zinc-900/50 border border-white/[0.06]">
              <div className="text-2xl sm:text-3xl font-bold text-cyan-400">&lt;3ms</div>
              <div className="text-zinc-400 mt-1">Edge MoE Defense Latency</div>
            </div>
            <div className="p-4 rounded-2xl bg-zinc-900/50 border border-white/[0.06]">
              <div className="text-2xl sm:text-3xl font-bold text-rose-400">5 Platforms</div>
              <div className="text-zinc-400 mt-1">Responsible Disclosures</div>
            </div>
          </div>

          {/* Interactive 3D Cyber Threat Matrix Viewport */}
          <CyberThreatScene3D />
        </section>

        {/* Section 1: Verified Vulnerability Disclosures (The Primary Focus) */}
        <section className="space-y-6">
          <div className="flex items-center justify-between font-mono">
            <div className="text-xs uppercase tracking-widest text-zinc-400 font-bold flex items-center gap-2">
              <Bug className="w-4 h-4 text-rose-400" />
              <span>Verified Vulnerability Disclosures</span>
            </div>
            <span className="text-xs text-zinc-500">GROUND-TRUTH EXPLOITATION & DIFFS</span>
          </div>

          <div className="space-y-4">
            {DISCLOSURES.map((item) => {
              const isExpanded = expandedId === item.id;
              return (
                <div 
                  key={item.id}
                  className={`rounded-2xl bg-[#08080d] border transition-all overflow-hidden ${
                    isExpanded ? 'border-rose-500/30 shadow-lg shadow-rose-500/5' : 'border-white/[0.08] hover:border-white/[0.18]'
                  }`}
                >
                  <div 
                    onClick={() => setExpandedId(isExpanded ? null : item.id)}
                    className="p-5 sm:p-6 flex items-start justify-between cursor-pointer group"
                  >
                    <div className="space-y-1.5 pr-4">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="text-base sm:text-lg font-bold text-white group-hover:text-rose-300 transition-colors">
                          {item.target}
                        </span>
                        <span className="text-xs font-mono text-zinc-500 bg-zinc-900 px-2 py-0.5 rounded border border-zinc-800">
                          {item.installBase}
                        </span>
                      </div>
                      <div className="text-sm text-zinc-300 font-medium">{item.title}</div>
                      <div className="text-xs font-mono text-zinc-500">{item.cwe}</div>
                    </div>

                    <div className="flex items-center gap-3 shrink-0 font-mono text-xs pt-1">
                      <span className="px-2.5 py-1 rounded-md bg-rose-500/10 text-rose-400 border border-rose-500/20 font-bold">
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
                    <div className="px-5 sm:px-6 pb-6 pt-2 space-y-4 border-t border-white/[0.06] font-mono text-xs">
                      <div>
                        <div className="text-zinc-400 text-[11px] uppercase tracking-wider font-bold mb-1">
                          Vulnerability Mechanism & Impact
                        </div>
                        <p className="text-zinc-300 font-sans text-sm leading-relaxed">
                          {item.summary}
                        </p>
                      </div>

                      <div>
                        <div className="text-zinc-400 text-[11px] uppercase tracking-wider font-bold mb-1">
                          Vulnerable vs. Remediated Source Diff
                        </div>
                        <div className="rounded-xl bg-black/90 border border-zinc-800 p-3.5 overflow-x-auto text-[11px] leading-relaxed">
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
                      </div>

                      <div className="flex flex-wrap items-center justify-between text-[11px] text-zinc-500 pt-1 border-t border-zinc-800/80">
                        <span>Coordinated Channel: {item.protocol}</span>
                        <span className="text-emerald-400 font-semibold">Status: Confirmed & Disclosed</span>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* Section 2: Defensive & Offensive Engineering Tooling (3D Tilt Cards) */}
        <section className="space-y-6">
          <div className="flex items-center justify-between font-mono">
            <div className="text-xs uppercase tracking-widest text-zinc-400 font-bold flex items-center gap-2">
              <Shield className="w-4 h-4 text-emerald-400" />
              <span>Security Engineering & Instrumentation Tools</span>
            </div>
            <span className="text-xs text-zinc-500">HOVER TO ROTATE IN 3D</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Senti_Argus */}
            <TiltCard className="p-6 sm:p-7 flex flex-col justify-between group md:col-span-2 border-beam">
              <div className="space-y-4">
                <div className="flex items-center justify-between font-mono text-xs">
                  <span className="px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-bold flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                    NEURAL EDGE NIDS
                  </span>
                  <span className="text-zinc-500">Rust / Python</span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-white tracking-tight group-hover:text-emerald-300 transition-colors">
                    Senti_Argus — Autonomous Edge Intrusion Defense
                  </h3>
                  <p className="text-sm text-zinc-300 leading-relaxed">
                    Low-latency local intrusion detection runtime with 4-layer Mixture-of-Experts neural routing. Evaluates raw packet streams via Windows Pktmon driver and promiscuous TAP, extracting 48-dimensional flow entropy vectors in sub-3 milliseconds without external cloud dependency.
                  </p>
                </div>

                <div className="rounded-xl bg-black/60 p-3 font-mono text-xs text-zinc-400 border border-zinc-800/80 space-y-1">
                  <div className="text-emerald-400 font-semibold">✓ Ingestion: Native Windows Pktmon driver</div>
                  <div>→ Pipeline: Layer 1 Fast-Path (0.12ms) → Layer 4 Deep Anomaly Sequence</div>
                  <div className="text-cyan-300">⚡ Inference: 2.14ms (CIC-IDS Benchmark Tested)</div>
                </div>
              </div>

              <div className="pt-6 flex items-center justify-between font-mono text-xs">
                <span className="text-zinc-500">Local-First Defense</span>
                <a 
                  href="https://github.com/blah-blah-cell/argus-next" 
                  target="_blank" 
                  rel="noreferrer"
                  className="flex items-center gap-1 text-emerald-400 hover:text-emerald-300 font-bold transition-colors"
                >
                  <span>Repository</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </TiltCard>

            {/* PE-Seal */}
            <TiltCard className="p-6 sm:p-7 flex flex-col justify-between group">
              <div className="space-y-4">
                <div className="flex items-center justify-between font-mono text-xs">
                  <span className="px-2.5 py-1 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 font-bold">
                    BINARY FORENSICS
                  </span>
                  <span className="text-zinc-500">Pure C</span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-indigo-300 transition-colors">
                    PE-Seal — Authenticode Forensic Parser
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
                  <span>Repository</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </TiltCard>

            {/* Project Anvil */}
            <TiltCard className="p-6 sm:p-7 flex flex-col justify-between group md:col-span-3">
              <div className="space-y-4">
                <div className="flex items-center justify-between font-mono text-xs">
                  <span className="px-2.5 py-1 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20 font-bold">
                    NATIVE REVERSE ENGINEERING BRIDGE
                  </span>
                  <span className="text-zinc-500">Ghidra 12.1 + Frida + MCP</span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-white tracking-tight group-hover:text-amber-300 transition-colors">
                    Project Anvil — Android Native SRE Dynamic Instrumentation Engine
                  </h3>
                  <p className="text-sm text-zinc-300 leading-relaxed max-w-3xl">
                    Automated reverse engineering bridge connecting NSA Ghidra 12.1 SRE, Android Virtual Device emulators, JADX decompilers, and Frida dynamic instrumentation over MCP. Built to disassemble proprietary ARM64 native shared libraries, defeat client-side anti-tamper routines, and trace JNI memory boundaries.
                  </p>
                </div>
              </div>

              <div className="pt-6 flex items-center justify-between font-mono text-xs">
                <span className="text-zinc-500">ARM64 • Ghidra Headless • Frida Hooks</span>
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

        {/* Section 3: Technical Dossier & Ground-Truth Implementation */}
        <section className="space-y-4">
          <div className="flex items-center justify-between font-mono text-xs">
            <div className="uppercase tracking-widest text-zinc-400 font-bold flex items-center gap-2">
              <Terminal className="w-4 h-4 text-cyan-400" />
              <span>Research Implementation Dossier</span>
            </div>
            <div className="flex items-center gap-1">
              {CODE_DOSSIER.map((file, idx) => (
                <button
                  key={file.name}
                  onClick={() => setActiveCodeTab(idx)}
                  className={`px-2.5 py-1 rounded transition-colors ${
                    activeCodeTab === idx 
                      ? 'bg-zinc-800 text-emerald-400 font-bold border border-zinc-700' 
                      : 'text-zinc-500 hover:text-zinc-300'
                  }`}
                >
                  {file.name}
                </button>
              ))}
            </div>
          </div>

          <div className="rounded-2xl bg-black/90 border border-zinc-800 p-5 relative font-mono text-xs overflow-hidden shadow-2xl">
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-zinc-800 text-zinc-400 text-[11px]">
              <span>{CODE_DOSSIER[activeCodeTab].desc}</span>
              <button
                onClick={() => copyCode(CODE_DOSSIER[activeCodeTab].code)}
                className="flex items-center gap-1 text-zinc-400 hover:text-white px-2 py-1 rounded bg-zinc-800 hover:bg-zinc-700 transition-colors"
              >
                {copiedCode ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedCode ? 'Copied' : 'Copy Code'}</span>
              </button>
            </div>

            <pre className="overflow-x-auto text-[11px] text-zinc-300 leading-relaxed max-h-[380px]">
              <code>{CODE_DOSSIER[activeCodeTab].code}</code>
            </pre>
          </div>
        </section>

        {/* Footer & PGP Coordinated Disclosure Contact */}
        <footer className="pt-12 border-t border-white/[0.08] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 font-mono text-xs text-zinc-400">
          <div className="space-y-1.5">
            <div className="text-white font-bold text-sm">Ojas Mehta</div>
            <div className="text-zinc-500 text-[11px]">Security Researcher & Systems Engineer</div>
            <div className="text-zinc-500 text-[11px]">PGP: 4A82 D901 3E7B 991F 2088 • Coordinated Disclosures</div>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={copyEmail}
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-200 hover:text-white transition-colors border border-white/10"
            >
              {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-zinc-400" />}
              <span>{copiedEmail ? 'Copied' : 'kidakabadiop2010@gmail.com'}</span>
            </button>

            <a
              href="https://github.com/blah-blah-cell"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-200 hover:text-white transition-colors border border-white/10"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>@blah-blah-cell</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500" />
            </a>
          </div>
        </footer>

      </main>
    </div>
  );
}
