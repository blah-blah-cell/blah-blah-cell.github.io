import React, { useState, useEffect, useRef } from 'react';
import { 
  Terminal as TerminalIcon, 
  Shield, 
  Orbit, 
  Bug, 
  FileCode, 
  Copy, 
  Check, 
  ArrowUpRight, 
  Mail, 
  ExternalLink,
  ChevronRight,
  Play,
  RotateCcw,
  Sparkles,
  Command,
  Cpu,
  Lock,
  Boxes
} from 'lucide-react';

const GithubIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

/* =========================================================================
   21st.dev Spotlight Card Hook (Linear / Raycast Style)
   ========================================================================= */
const useSpotlight = () => {
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    e.currentTarget.style.setProperty('--mouse-x', `${x}px`);
    e.currentTarget.style.setProperty('--mouse-y', `${y}px`);
  };

  return { onMouseMove: handleMouseMove };
};

/* =========================================================================
   Interactive Terminal Command Center
   ========================================================================= */
interface CommandLog {
  id: string;
  command: string;
  output: React.ReactNode;
}

const InteractiveTerminal: React.FC = () => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<CommandLog[]>([
    {
      id: 'init-1',
      command: 'sysinfo',
      output: (
        <div className="text-zinc-400 space-y-1">
          <div><span className="text-emerald-400 font-semibold">IDENTITY:</span> Ojas Mehta // Grade 11 CBSE PCM</div>
          <div><span className="text-cyan-400 font-semibold">CORE DOMAIN:</span> Low-Latency Systems, Edge NIDS, Offensive Research</div>
          <div><span className="text-amber-400 font-semibold">CURRENT STACK:</span> Rust, C, WebGPU/WGSL, Python, ARM64 Ghidra</div>
          <div className="text-zinc-500 pt-1">Type <span className="text-white underline cursor-pointer">help</span> to view available system commands.</div>
        </div>
      )
    }
  ]);

  const terminalEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleCommand = (cmdText: string) => {
    const trimmed = cmdText.trim().toLowerCase();
    if (!trimmed) return;

    let outputNode: React.ReactNode = null;

    switch (trimmed) {
      case 'help':
        outputNode = (
          <div className="space-y-1 text-zinc-300">
            <div className="text-zinc-500">// AVAILABLE DIAGNOSTIC COMMANDS</div>
            <div><span className="text-emerald-400 font-bold">status</span>       - Check live daemons for Senti_Argus & ASTRODYNE</div>
            <div><span className="text-emerald-400 font-bold">cve</span>          - Enumerate confirmed vulnerability advisories</div>
            <div><span className="text-emerald-400 font-bold">cat argus.rs</span> - Dump core Rust Mixture-of-Experts packet router</div>
            <div><span className="text-emerald-400 font-bold">hexdump</span>      - Inspect ARM64 ELF binary header from ShareMe SRE</div>
            <div><span className="text-emerald-400 font-bold">mit</span>          - View MIT EECS undergraduate research strategy</div>
            <div><span className="text-emerald-400 font-bold">clear</span>        - Flush terminal buffer</div>
          </div>
        );
        break;

      case 'status':
        outputNode = (
          <div className="space-y-1.5 font-mono text-zinc-300">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-white font-bold">[DAEMON: Senti_Argus]</span>
              <span className="text-emerald-400">RUNNING</span>
            </div>
            <div className="pl-4 text-xs text-zinc-400 space-y-0.5">
              <div>→ Ingestion Driver: Windows Pktmon Promiscuous TAP</div>
              <div>→ Inference Latency: 2.14ms (Sub-3ms threshold PASSED)</div>
              <div>→ Gating Accuracy: 99.4% against CIC-IDS flow anomalies</div>
            </div>

            <div className="flex items-center gap-2 pt-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span className="text-white font-bold">[ENGINE: ASTRODYNE PRIME]</span>
              <span className="text-cyan-400">READY</span>
            </div>
            <div className="pl-4 text-xs text-zinc-400 space-y-0.5">
              <div>→ Compute Pipeline: WebGPU Barnes-Hut Octree Traversal</div>
              <div>→ Workgroup Allocation: 256 threads / cluster @ 500k bodies</div>
              <div>→ Throughput: 60 FPS continuous simulation</div>
            </div>
          </div>
        );
        break;

      case 'cve':
        outputNode = (
          <div className="space-y-2 text-zinc-300">
            <div className="text-zinc-500">// AUDITED CODEBASES & CONFIRMED DISCLOSURES</div>
            <div className="p-2 rounded bg-zinc-900 border border-zinc-800 space-y-1">
              <div className="flex justify-between font-bold text-rose-400">
                <span>[XIAOMI-SHAREME] Arbitrary IPC File Write</span>
                <span className="text-xs bg-rose-500/10 px-1.5 py-0.5 rounded border border-rose-500/20">CVSS 8.8 HIGH</span>
              </div>
              <div className="text-xs text-zinc-400">Target: com.xiaomi.midrop (500M+ installs) | CWE-862, CWE-22</div>
            </div>

            <div className="p-2 rounded bg-zinc-900 border border-zinc-800 space-y-1">
              <div className="flex justify-between font-bold text-amber-400">
                <span>[ELEMENTOR-AI] Missing Authorization Quota Drain</span>
                <span className="text-xs bg-amber-500/10 px-1.5 py-0.5 rounded border border-amber-500/20">CVSS 6.3 MED</span>
              </div>
              <div className="text-xs text-zinc-400">Target: Elementor Website Builder (5M+ installs) | CWE-862</div>
            </div>

            <div className="p-2 rounded bg-zinc-900 border border-zinc-800 space-y-1">
              <div className="flex justify-between font-bold text-cyan-400">
                <span>[REDUX-FRAMEWORK] Broken Access Control Conjunction</span>
                <span className="text-xs bg-cyan-500/10 px-1.5 py-0.5 rounded border border-cyan-500/20">CVSS 5.3 MED</span>
              </div>
              <div className="text-xs text-zinc-400">Target: Redux Framework (1M+ installs) | CWE-284 Boolean Inversion</div>
            </div>

            <div className="p-2 rounded bg-zinc-900 border border-zinc-800 space-y-1">
              <div className="flex justify-between font-bold text-purple-400">
                <span>[NESTED-PROPERTY] Incomplete Fix Prototype Pollution</span>
                <span className="text-xs bg-purple-500/10 px-1.5 py-0.5 rounded border border-purple-500/20">0-DAY</span>
              </div>
              <div className="text-xs text-zinc-400">Target: nested-property (4M+ downloads) | CWE-1321 Object Mutation</div>
            </div>
          </div>
        );
        break;

      case 'cat argus.rs':
        outputNode = (
          <pre className="text-xs text-emerald-300 font-mono leading-relaxed overflow-x-auto p-2 bg-black/60 rounded border border-zinc-800">
{`pub struct MoERouter {
    threshold: f32,
    anomaly_gate: AnomalyGateNetwork,
    experts: Vec<Box<dyn PacketExpert + Send + Sync>>,
}

impl MoERouter {
    #[inline(always)]
    pub fn evaluate_flow(&self, vector: &FlowFeatures) -> Verdict {
        // Fast-path hardware CIDR / Authenticode short-circuit (<0.1ms)
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
    }`}
          </pre>
        );
        break;

      case 'hexdump':
        outputNode = (
          <pre className="text-[11px] text-zinc-400 font-mono leading-tight overflow-x-auto p-2.5 bg-black/80 rounded border border-zinc-800">
{`00000000  7f 45 4c 46 02 01 01 00  00 00 00 00 00 00 00 00  |.ELF............|
00000010  03 00 b7 00 01 00 00 00  40 52 02 00 00 00 00 00  |........@R......|
00000020  40 00 00 00 00 00 00 00  38 1e 0a 00 00 00 00 00  |@.......8.......|
00000030  00 00 00 00 40 00 38 00  09 00 40 00 1c 00 1b 00  |....@.8...@.....|
[+] Target: libtoolChecker.so (ARM64 ELF shared object)
[+] Exported JNI: Java_com_xiaomi_midrop_util_SecurityBridge_verifyPayload`}
          </pre>
        );
        break;

      case 'mit':
        outputNode = (
          <div className="space-y-1 text-zinc-300">
            <div className="text-cyan-400 font-bold">🏛️ MIT EECS UNDERGRADUATE RESEARCH BLUEPRINT</div>
            <div>• Target Horizon: Grade 11-12 (Early Action Nov 2027)</div>
            <div>• Core Thesis: Deterministic Cyber-Physical Intrusion Defense & Verified Systems</div>
            <div>• Pillar 1: Verified CVE Disclosures across 500M+ software surface</div>
            <div>• Pillar 2: Low-Latency Edge NIDS Research Whitepaper (MoE routing)</div>
            <div>• Pillar 3: MIT Maker Portfolio Artifacts (Pktmon live tap + WebGPU simulation)</div>
            <div>• Pillar 4: Applied First-Principles Mathematics (PCM, Galois Fields, ODEs)</div>
          </div>
        );
        break;

      case 'clear':
        setHistory([]);
        setInput('');
        return;

      default:
        outputNode = (
          <div className="text-rose-400">
            Command not recognized: <span className="text-white font-mono">{cmdText}</span>. Type <span className="underline cursor-pointer" onClick={() => handleCommand('help')}>help</span> for valid diagnostic routines.
          </div>
        );
        break;
    }

    setHistory((prev) => [
      ...prev,
      {
        id: Math.random().toString(36).substring(2, 9),
        command: cmdText,
        output: outputNode
      }
    ]);
    setInput('');
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleCommand(input);
  };

  return (
    <div className="w-full rounded-2xl bg-[#09090d] border border-white/[0.08] shadow-2xl overflow-hidden font-mono text-xs">
      {/* Terminal Titlebar */}
      <div className="bg-[#121217] px-4 py-2.5 border-b border-white/[0.06] flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
          <span className="text-zinc-400 text-xs font-semibold ml-2">ojas@terminal ~ zsh</span>
        </div>
        <div className="flex items-center gap-2 text-zinc-500 text-[11px]">
          <span>UTF-8</span>
          <span>•</span>
          <span className="text-emerald-400">SESSION_ACTIVE</span>
        </div>
      </div>

      {/* Terminal Output Body */}
      <div className="p-4 sm:p-5 max-h-[380px] overflow-y-auto space-y-4">
        {history.map((h) => (
          <div key={h.id} className="space-y-1.5">
            <div className="flex items-center gap-2 text-zinc-400">
              <span className="text-emerald-400 font-bold">ojas@workstation:~$</span>
              <span className="text-zinc-100 font-semibold">{h.command}</span>
            </div>
            <div className="pl-3 border-l border-zinc-800/80">{h.output}</div>
          </div>
        ))}
        <div ref={terminalEndRef} />
      </div>

      {/* Interactive Quick-Pills for Mobile & Quick Clicks */}
      <div className="px-4 py-2 bg-[#0c0c11] border-t border-white/[0.04] flex flex-wrap items-center gap-1.5">
        <span className="text-zinc-500 text-[10px] uppercase font-bold mr-1">Quick Run:</span>
        {['help', 'status', 'cve', 'cat argus.rs', 'hexdump', 'mit', 'clear'].map((btn) => (
          <button
            key={btn}
            onClick={() => handleCommand(btn)}
            className="px-2 py-0.5 rounded bg-zinc-800/80 hover:bg-zinc-700 text-zinc-300 hover:text-white transition-colors border border-white/5 text-[11px]"
          >
            {btn}
          </button>
        ))}
      </div>

      {/* Interactive Input Prompt */}
      <form onSubmit={onSubmit} className="px-4 py-2.5 bg-[#0e0e13] border-t border-white/[0.06] flex items-center gap-2">
        <span className="text-emerald-400 font-bold">ojas@workstation:~$</span>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="type a command (e.g. cve, status, help)..."
          className="flex-1 bg-transparent text-zinc-100 placeholder-zinc-600 focus:outline-none font-mono text-xs"
        />
        <button type="submit" className="text-zinc-500 hover:text-zinc-300">
          <ChevronRight className="w-4 h-4" />
        </button>
      </form>
    </div>
  );
};

/* =========================================================================
   Unified Git Diff Component (Real Security Research Standard)
   ========================================================================= */
const GitDiffBox: React.FC<{
  title: string;
  cve: string;
  severity: string;
  target: string;
  diff: string;
  explanation: string;
}> = ({ title, cve, severity, target, diff, explanation }) => {
  return (
    <div className="rounded-xl border border-white/[0.08] bg-[#0c0c10] overflow-hidden font-mono text-xs">
      <div className="px-4 py-2.5 bg-zinc-900/90 border-b border-white/[0.06] flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Bug className="w-3.5 h-3.5 text-rose-400" />
          <span className="font-bold text-white text-xs">{title}</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-rose-500/10 text-rose-400 border border-rose-500/20">
            {severity}
          </span>
          <span className="text-zinc-500 text-[11px]">{target}</span>
        </div>
      </div>

      <div className="p-3 bg-black/60 overflow-x-auto text-zinc-300 text-[11px] leading-relaxed">
        <pre>
          {diff.split('\n').map((line, i) => {
            let color = 'text-zinc-400';
            if (line.startsWith('+')) color = 'text-emerald-400 bg-emerald-500/5';
            else if (line.startsWith('-')) color = 'text-rose-400 bg-rose-500/5';
            else if (line.startsWith('@@')) color = 'text-cyan-400 font-bold';
            return (
              <div key={i} className={`px-1 rounded-sm ${color}`}>
                {line}
              </div>
            );
          })}
        </pre>
      </div>

      <div className="px-3.5 py-2 bg-zinc-950/80 text-[11px] text-zinc-400 border-t border-white/[0.04]">
        <span className="text-zinc-300 font-semibold">Root Cause:</span> {explanation}
      </div>
    </div>
  );
};

/* =========================================================================
   Main App Component
   ========================================================================= */
export default function App() {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const spotlight = useSpotlight();

  const copyToClipboard = (text: string, keyName: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(keyName);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  return (
    <div className="min-h-screen bg-[#060608] text-zinc-100 selection:bg-emerald-500/20 selection:text-emerald-300 font-sans relative">
      {/* Subtle background grid with radial fade */}
      <div className="fixed inset-0 hero-grid pointer-events-none z-0" />

      {/* Clean, minimal header */}
      <header className="sticky top-0 z-50 border-b border-white/[0.06] bg-[#060608]/85 backdrop-blur-md">
        <div className="max-w-5xl mx-auto px-4 h-14 flex items-center justify-between text-xs">
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 rounded-lg bg-zinc-800 border border-white/10 flex items-center justify-center font-mono font-bold text-emerald-400 text-xs">
              OM
            </div>
            <div className="flex items-center gap-2">
              <span className="font-semibold text-white tracking-tight">Ojas Mehta</span>
              <span className="text-zinc-500 font-mono hidden sm:inline">// systems & offensive security</span>
            </div>
          </div>

          <div className="flex items-center gap-3 font-mono">
            <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-[11px]">
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
        </div>
      </header>

      {/* Main Content Area */}
      <main className="relative z-10 max-w-5xl mx-auto px-4 pt-12 pb-24 space-y-16">
        {/* Hero Section: Minimal, Brutalist, Zero Fluff */}
        <section className="space-y-6 pt-2">
          <div className="space-y-2">
            <div className="text-xs font-mono text-zinc-400 uppercase tracking-wider font-semibold">
              Research Dossier • Grade 11
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Systems engineer. Vulnerability researcher.
            </h1>
            <p className="text-base sm:text-lg text-zinc-400 max-w-3xl leading-relaxed pt-1">
              Building low-latency on-device intrusion defense engines, WebGPU particle physics workstations, and breaking production infrastructure securing 500M+ users.
            </p>
          </div>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2 font-mono">
            <div className="p-3.5 rounded-xl bg-zinc-900/60 border border-white/[0.06]">
              <div className="text-2xl font-bold text-white">500M+</div>
              <div className="text-xs text-zinc-400 mt-0.5">Surface Audited</div>
            </div>
            <div className="p-3.5 rounded-xl bg-zinc-900/60 border border-white/[0.06]">
              <div className="text-2xl font-bold text-emerald-400">4-Layer</div>
              <div className="text-xs text-zinc-400 mt-0.5">MoE Neural NIDS</div>
            </div>
            <div className="p-3.5 rounded-xl bg-zinc-900/60 border border-white/[0.06]">
              <div className="text-2xl font-bold text-cyan-400">500,000+</div>
              <div className="text-xs text-zinc-400 mt-0.5">WebGPU Bodies @ 60 FPS</div>
            </div>
            <div className="p-3.5 rounded-xl bg-zinc-900/60 border border-white/[0.06]">
              <div className="text-2xl font-bold text-amber-400">4 Confirmed</div>
              <div className="text-xs text-zinc-400 mt-0.5">0-Day & CVE Advisories</div>
            </div>
          </div>
        </section>

        {/* Interactive Command Terminal */}
        <section className="space-y-3">
          <div className="flex items-center justify-between">
            <div className="text-xs font-mono font-bold text-zinc-400 uppercase tracking-wider flex items-center gap-2">
              <TerminalIcon className="w-3.5 h-3.5 text-emerald-400" />
              <span>Interactive System Console</span>
            </div>
            <span className="text-[11px] font-mono text-zinc-500">Run commands directly</span>
          </div>
          <InteractiveTerminal />
        </section>

        {/* Flagship Systems: Spotlight Bento Cards */}
        <section className="space-y-4">
          <div className="text-xs font-mono font-bold text-zinc-400 uppercase tracking-wider flex items-center gap-2">
            <Boxes className="w-3.5 h-3.5 text-cyan-400" />
            <span>Systems & Architecture</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* System 1: Senti_Argus */}
            <div {...spotlight} className="spotlight-card p-6 space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center justify-between font-mono text-xs">
                  <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-semibold">
                    EDGE NIDS RUNTIME
                  </span>
                  <span className="text-zinc-500">Rust / Python</span>
                </div>

                <div className="space-y-1.5">
                  <h3 className="text-xl font-bold text-white tracking-tight">
                    Senti_Argus — Autonomous Edge Intrusion Defense
                  </h3>
                  <p className="text-sm text-zinc-400 leading-relaxed">
                    Windows & Linux local intrusion detection runtime with bounded temporal memory, native Pktmon / Scapy packet stream fusion, deterministic signature verification, and 4-layer Mixture-of-Experts neural routing.
                  </p>
                </div>

                <div className="rounded-lg bg-black/60 p-3 font-mono text-xs text-zinc-400 border border-zinc-800/80 space-y-1">
                  <div className="text-emerald-400">✓ Ingestion: Native Windows Pktmon driver</div>
                  <div>→ Extraction: 48-dimensional entropy & flow velocity</div>
                  <div className="text-cyan-300">⚡ Inference: 2.14ms (MoE gating network)</div>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap gap-1.5 font-mono text-[11px]">
                {['Rust', 'Pktmon / eBPF', 'MoE Neural Gate', 'CIC-IDS Benchmark'].map((t) => (
                  <span key={t} className="px-2 py-0.5 rounded bg-zinc-800/80 text-zinc-300 border border-zinc-700/60">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* System 2: ASTRODYNE PRIME */}
            <div {...spotlight} className="spotlight-card p-6 space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center justify-between font-mono text-xs">
                  <span className="px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 font-semibold">
                    WEBGPU COMPUTE WORKSTATION
                  </span>
                  <span className="text-zinc-500">WGSL / TypeScript</span>
                </div>

                <div className="space-y-1.5">
                  <h3 className="text-xl font-bold text-white tracking-tight">
                    ASTRODYNE PRIME — N-Body Physics Accelerator
                  </h3>
                  <p className="text-sm text-zinc-400 leading-relaxed">
                    Browser-native Barnes-Hut Octree & direct workgroup-tiled $O(N \log N)$ compute engine simulating 500,000+ interacting celestial bodies with 4th-order symplectic Runge-Kutta numerical integration.
                  </p>
                </div>

                <div className="rounded-lg bg-black/60 p-3 font-mono text-xs text-zinc-400 border border-zinc-800/80 space-y-1">
                  <div className="flex justify-between"><span>Workgroup Size:</span> <span className="text-white">256 threads</span></div>
                  <div className="flex justify-between"><span>Frame Rate:</span> <span className="text-emerald-400">60 FPS continuous</span></div>
                  <div className="flex justify-between"><span>Integrator:</span> <span className="text-cyan-300">Symplectic RK4</span></div>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap gap-1.5 font-mono text-[11px]">
                {['WebGPU', 'WGSL Shaders', 'Barnes-Hut', 'Astrodynamics'].map((t) => (
                  <span key={t} className="px-2 py-0.5 rounded bg-zinc-800/80 text-zinc-300 border border-zinc-700/60">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Vulnerability Research: Real Diffs & Root Causes */}
        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="text-xs font-mono font-bold text-zinc-400 uppercase tracking-wider flex items-center gap-2">
              <Bug className="w-3.5 h-3.5 text-rose-400" />
              <span>Verified Disclosures & Vulnerability Advisories</span>
            </div>
            <span className="text-[11px] font-mono text-zinc-500">Empirical Code Evidence</span>
          </div>

          <div className="space-y-3">
            <GitDiffBox
              title="Xiaomi ShareMe — Exported IPC Arbitrary File Overwrite"
              cve="CWE-862 / CWE-22"
              severity="CVSS 8.8 HIGH"
              target="com.xiaomi.midrop (500M+ Installs)"
              diff={`@@ -84,7 +84,10 @@ public class MiDropReceiver extends BroadcastReceiver {
     public void onReceive(Context context, Intent intent) {
-        String targetPath = intent.getStringExtra("dest_file");
-        FileOutputStream fos = new FileOutputStream(new File(targetPath));
+        // Vulnerable: Unauthenticated broadcast + uncanonicalized path traversal
+        String rawPath = intent.getStringExtra("dest_file");
+        String sanitized = PathUtils.canonicalizeAndSandbox(rawPath, getFilesDir());
+        FileOutputStream fos = new FileOutputStream(new File(sanitized));
     }`}
              explanation="Exported broadcast receiver allowed any malicious local application to bypass file isolation and overwrite internal shared preferences via relative directory traversal tokens."
            />

            <GitDiffBox
              title="Elementor Website Builder — AI Quota Drain & Prompt Leak"
              cve="CWE-862"
              severity="CVSS 6.3 MED"
              target="Elementor Core (5M+ Installs)"
              diff={`@@ -142,6 +142,9 @@ public function ajax_ai_get_custom_code( $data ) {
-    // Missing authorization guard
-    return $this->connect->get_ai_code( $data['prompt'] );
+    if ( ! current_user_can( 'manage_options' ) ) {
+        throw new \\Exception( 'Unauthorized capability.' );
+    }
+    return $this->connect->get_ai_code( $data['prompt'] );
 }`}
              explanation="AJAX handlers failed to enforce administrator capabilities, permitting authenticated Subscriber-role accounts to deplete commercial AI credits and extract private prompt histories."
            />

            <GitDiffBox
              title="Redux Framework — Broken Access Control via Boolean Logic Flaw"
              cve="CWE-284"
              severity="CVSS 5.3 MED"
              target="Redux Framework (1M+ Installs)"
              diff={`@@ -210,5 +210,5 @@ public function ajax_save() {
-    // Flawed conjunction: if user is logged in, current_user_can() is bypassed
-    if ( ! is_user_logged_in() && ! current_user_can( $this->args['page_permissions'] ) ) {
+    if ( ! is_user_logged_in() || ! current_user_can( $this->args['page_permissions'] ) ) {
         wp_die( -1 );
     }`}
              explanation="Using '&&' instead of '||' caused the administrator capability check to become dead code for any logged-in user with panel access."
            />
          </div>
        </section>

        {/* Academic Blueprint: MIT Strategy */}
        <section className="space-y-4">
          <div className="text-xs font-mono font-bold text-zinc-400 uppercase tracking-wider flex items-center gap-2">
            <Lock className="w-3.5 h-3.5 text-indigo-400" />
            <span>Academic Target Matrix (MIT EECS)</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 font-mono text-xs">
            <div className="p-4 rounded-xl bg-zinc-900/50 border border-white/[0.06] space-y-2">
              <div className="text-emerald-400 font-bold">[01] CVE Credentials</div>
              <p className="text-zinc-400 text-[11px] leading-relaxed">
                Third-party verified security impact on major public codebases (Xiaomi, Elementor, WordPress).
              </p>
            </div>
            <div className="p-4 rounded-xl bg-zinc-900/50 border border-white/[0.06] space-y-2">
              <div className="text-cyan-400 font-bold">[02] NIDS Whitepaper</div>
              <p className="text-zinc-400 text-[11px] leading-relaxed">
                Novel 4-layer MoE routing paper with microsecond latency benchmarks for edge defense.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-zinc-900/50 border border-white/[0.06] space-y-2">
              <div className="text-indigo-400 font-bold">[03] Maker Artifacts</div>
              <p className="text-zinc-400 text-[11px] leading-relaxed">
                Working demonstrations: physical Promiscuous TAP captures & WebGPU compute shaders.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-zinc-900/50 border border-white/[0.06] space-y-2">
              <div className="text-amber-400 font-bold">[04] Foundations</div>
              <p className="text-zinc-400 text-[11px] leading-relaxed">
                CBSE Grade 11-12 PCM track with rigorous discrete math, linear algebra, and calculus.
              </p>
            </div>
          </div>
        </section>

        {/* Footer & Contact */}
        <footer className="pt-8 border-t border-white/[0.08] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 font-mono text-xs text-zinc-400">
          <div className="space-y-1">
            <div className="text-white font-semibold">Ojas Mehta</div>
            <div className="text-zinc-500 text-[11px]">PGP: 4A82 D901 3E7B 991F 2088 • kidakabadiop2010@gmail.com</div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => copyToClipboard('kidakabadiop2010@gmail.com', 'email')}
              className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-zinc-800/80 hover:bg-zinc-700 text-zinc-200 transition-colors border border-white/10"
            >
              {copiedKey === 'email' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copiedKey === 'email' ? 'Copied' : 'Copy Email'}</span>
            </button>

            <a
              href="https://github.com/blah-blah-cell"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-zinc-800/80 hover:bg-zinc-700 text-zinc-200 transition-colors border border-white/10"
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
