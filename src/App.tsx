import React, { useState } from 'react';
import { 
  ArrowUpRight, 
  Copy, 
  Check, 
  ChevronDown, 
  ChevronRight,
  FileCode,
  Lock,
  Terminal,
  Code
} from 'lucide-react';

const GithubIcon: React.FC<{ className?: string }> = ({ className = "w-3.5 h-3.5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

interface Project {
  title: string;
  tagline: string;
  description: string;
  meta: string;
  href: string;
}

const PROJECTS: Project[] = [
  {
    title: 'Argus',
    tagline: 'Autonomous edge intrusion detection runtime',
    description: 'An on-device NIDS for cyber-physical edge networks. Implements a 4-layer Mixture-of-Experts routing network that inspects and classifies raw packet flow vectors in sub-3 milliseconds without cloud dependency.',
    meta: 'Rust • Python • Windows Pktmon • CIC-IDS Benchmark',
    href: 'https://github.com/blah-blah-cell/argus-next'
  },
  {
    title: 'Astrodyne Prime',
    tagline: 'Browser-native WebGPU astrodynamics workstation',
    description: 'A celestial mechanics simulator executing Barnes-Hut octree traversal directly on the GPU in WGSL. Simulates 500,000+ gravitationally interacting bodies at continuous 60 FPS with 4th-order symplectic Runge-Kutta numerical integration.',
    meta: 'WebGPU • WGSL • TypeScript • Astrodynamics',
    href: 'https://github.com/blah-blah-cell/astrodyne-prime'
  },
  {
    title: 'PE-Seal',
    tagline: 'Authenticode digital signature & binary forensic parser',
    description: 'Zero-dependency PE32 / PE32+ parser and digital signature extractor. Verifies PKCS#7 signed Authenticode binaries directly from raw byte streams without Windows API or OpenSSL dependencies.',
    meta: 'Pure C • PE32+ Specs • Authenticode PKCS#7',
    href: 'https://github.com/blah-blah-cell/pe-seal'
  },
  {
    title: 'Project Anvil',
    tagline: 'Android native SRE bridge over MCP',
    description: 'High-level reverse engineering bridge connecting Ghidra SRE, Android Virtual Device emulators, and Frida dynamic instrumentation over MCP. Built to disassemble proprietary ARM64 native shared libraries and trace JNI memory boundaries.',
    meta: 'ARM64 • Ghidra 12.1 • Frida Hooking • JNI Audit',
    href: 'https://github.com/blah-blah-cell/zomato-mcp-security-assessment'
  }
];

interface Disclosure {
  id: string;
  year: string;
  target: string;
  installBase: string;
  vulnerability: string;
  cwe: string;
  severity: string;
  diff: string;
  summary: string;
}

const DISCLOSURES: Disclosure[] = [
  {
    id: 'shareme',
    year: '2026',
    target: 'Xiaomi ShareMe',
    installBase: '500M+ installs',
    vulnerability: 'Unauthenticated IPC Arbitrary File Overwrite',
    cwe: 'CWE-862 / CWE-22',
    severity: 'CVSS 8.8 High',
    summary: 'Exported broadcast receiver in com.xiaomi.midrop handled incoming peer transfers without origin authentication or path canonicalization, allowing local malicious apps to overwrite internal app preferences via directory traversal tokens.',
    diff: `@@ -84,6 +84,8 @@ public class MiDropReceiver extends BroadcastReceiver {
     public void onReceive(Context context, Intent intent) {
-        String targetPath = intent.getStringExtra("dest_file");
-        FileOutputStream fos = new FileOutputStream(new File(targetPath));
+        String rawPath = intent.getStringExtra("dest_file");
+        String safePath = PathUtils.sandboxToCache(rawPath, context.getFilesDir());
+        FileOutputStream fos = new FileOutputStream(new File(safePath));
     }`
  },
  {
    id: 'elementor',
    year: '2026',
    target: 'Elementor Website Builder',
    installBase: '5M+ installs',
    vulnerability: 'Missing Authorization in AI Generation Handlers',
    cwe: 'CWE-862',
    severity: 'CVSS 6.3 Medium',
    summary: 'Core AI AJAX endpoints (ai_get_custom_code, ai_get_history) lacked capability checks. Any authenticated Subscriber-role account could consume commercial AI credits and extract private prompt histories.',
    diff: `@@ -142,5 +142,8 @@ public function ajax_ai_get_custom_code( $data ) {
+    if ( ! current_user_can( 'manage_options' ) ) {
+        throw new \\Exception( 'Unauthorized capability.' );
+    }
     return $this->connect->get_ai_code( $data['prompt'] );
 }`
  },
  {
    id: 'redux',
    year: '2026',
    target: 'Redux Framework',
    installBase: '1M+ installs',
    vulnerability: 'Broken Access Control via Inverted Boolean Conjunction',
    cwe: 'CWE-284',
    severity: 'CVSS 5.3 Medium',
    summary: "In class-redux-ajax-save.php, the capability check used !is_user_logged_in() && !current_user_can(). Because of the '&&' conjunction, current_user_can() was dead code for any logged-in user with panel access.",
    diff: `@@ -210,4 +210,4 @@ public function ajax_save() {
-    if ( ! is_user_logged_in() && ! current_user_can( $this->args['page_permissions'] ) ) {
+    if ( ! is_user_logged_in() || ! current_user_can( $this->args['page_permissions'] ) ) {
         wp_die( -1 );
     }`
  },
  {
    id: 'nested-property',
    year: '2026',
    target: 'nested-property',
    installBase: '4M+ downloads',
    vulnerability: '0-Day Incomplete Fix Prototype Pollution',
    cwe: 'CWE-1321',
    severity: '0-Day',
    summary: 'Discovered that defensive patches filtering __proto__ in nested-property v4.0.0 could be bypassed via constructor.prototype access chains, allowing arbitrary pollution of Node.js runtime globals.',
    diff: `// Exploit Vector:
const nested = require('nested-property');
let payload = {};
nested.set(payload, 'constructor.prototype.polluted', true);
console.log({}.polluted); // true`
  }
];

const CODE_SNIPPETS = [
  {
    name: 'argus_router.rs',
    lang: 'Rust',
    code: `pub struct MoERouter {
    threshold: f32,
    anomaly_gate: AnomalyGateNetwork,
    experts: Vec<Box<dyn PacketExpert + Send + Sync>>,
}

impl MoERouter {
    #[inline(always)]
    pub fn evaluate_flow(&self, vector: &FlowFeatures) -> Verdict {
        // Fast-path hardware CIDR / Authenticode filter (<0.1ms)
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
    name: 'barnes_hut.wgsl',
    lang: 'WGSL',
    code: `@compute @workgroup_size(256)
fn compute_nbody_forces(@builtin(global_invocation_id) id: vec3<u32>) {
    let index = id.x;
    if (index >= arrayLength(&bodies)) { return; }

    let p = bodies[index].pos_mass.xyz;
    var acc = vec3<f32>(0.0);

    var stack: array<u32, 64>;
    var stack_ptr: u32 = 1u;
    stack[0] = 0u;

    while (stack_ptr > 0u) {
        stack_ptr = stack_ptr - 1u;
        let node = octree_nodes[stack[stack_ptr]];

        let d = node.center_of_mass.xyz - p;
        let r_sq = dot(d, d) + EPSILON_SQ;
        let node_size = node.bounds.w;

        // Multipole criterion: approximate distant cluster as single mass
        if (node.is_leaf == 1u || (node_size * node_size / r_sq) < (THETA * THETA)) {
            let inv_r = inverseSqrt(r_sq);
            acc += d * (node.center_of_mass.w * inv_r * inv_r * inv_r);
        } else {
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
  }
];

export default function App() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [expandedDisclosure, setExpandedDisclosure] = useState<string | null>(null);
  const [activeCodeSnippet, setActiveCodeSnippet] = useState(0);
  const [copiedSnippet, setCopiedSnippet] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText('kidakabadiop2010@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const copyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedSnippet(true);
    setTimeout(() => setCopiedSnippet(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[#000000] text-[#ededed] font-sans antialiased relative selection:bg-white/20 selection:text-white">
      {/* Subtle top atmospheric glow (Linear style) */}
      <div className="ambient-glow" />

      <main className="max-w-[640px] mx-auto px-6 py-20 sm:py-28 space-y-20 relative z-10">
        
        {/* Profile / Identity */}
        <section className="space-y-6">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <h1 className="text-2xl sm:text-3xl font-semibold tracking-[-0.03em] text-[#ffffff]">
                Ojas Mehta
              </h1>
              <div className="flex items-center gap-2 text-xs text-[#888888] font-mono">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span>active research</span>
              </div>
            </div>
            <p className="text-sm sm:text-base text-[#888888] leading-relaxed">
              Systems engineer and vulnerability researcher based in Bengaluru.
            </p>
          </div>

          <p className="text-sm text-[#a1a1aa] leading-relaxed">
            I focus on low-latency systems, edge intrusion defense runtimes, and vulnerability research. Currently an 11th-grade student exploring the intersection of distributed systems, telemetry pipelines, and offensive security.
          </p>

          <div className="flex items-center gap-4 text-xs font-mono pt-1">
            <a 
              href="https://github.com/blah-blah-cell" 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center gap-1 text-[#888888] hover:text-[#ffffff] transition-colors"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>GitHub</span>
              <ArrowUpRight className="w-3 h-3 text-[#555555]" />
            </a>

            <span className="text-[#333333]">•</span>

            <button 
              onClick={copyEmail}
              className="flex items-center gap-1 text-[#888888] hover:text-[#ffffff] transition-colors"
            >
              <span>Email</span>
              {copiedEmail ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3 text-[#555555]" />}
            </button>

            <span className="text-[#333333]">•</span>

            <span className="text-[#555555]">
              PGP: 4A82 D901 3E7B 991F
            </span>
          </div>
        </section>

        {/* Systems / Selected Works */}
        <section className="space-y-6">
          <div className="text-xs font-mono uppercase tracking-widest text-[#666666]">
            Systems
          </div>

          <div className="space-y-8">
            {PROJECTS.map((project) => (
              <a 
                key={project.title}
                href={project.href}
                target="_blank"
                rel="noreferrer"
                className="group block space-y-2 transition-all"
              >
                <div className="flex items-baseline justify-between">
                  <span className="text-base font-medium text-[#ededed] group-hover:text-[#ffffff] transition-colors">
                    {project.title}
                  </span>
                  <div className="flex items-center gap-1 text-xs text-[#555555] group-hover:text-[#888888] transition-colors">
                    <span className="font-mono">{project.tagline}</span>
                    <ArrowUpRight className="w-3 h-3 text-[#444444] group-hover:text-[#888888] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </div>
                </div>

                <p className="text-sm text-[#888888] leading-relaxed">
                  {project.description}
                </p>

                <div className="text-xs font-mono text-[#555555]">
                  {project.meta}
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Vulnerability Disclosures */}
        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <div className="text-xs font-mono uppercase tracking-widest text-[#666666]">
              Disclosures
            </div>
            <span className="text-xs font-mono text-[#555555]">
              500M+ user reach audited
            </span>
          </div>

          <div className="divide-y divide-[#1a1a1a] border-y border-[#1a1a1a]">
            {DISCLOSURES.map((item) => {
              const isExpanded = expandedDisclosure === item.id;
              return (
                <div key={item.id} className="py-4 space-y-3 transition-colors">
                  <div 
                    onClick={() => setExpandedDisclosure(isExpanded ? null : item.id)}
                    className="flex items-start justify-between cursor-pointer group"
                  >
                    <div className="space-y-1 pr-4">
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-medium text-[#ededed] group-hover:text-[#ffffff] transition-colors">
                          {item.target}
                        </span>
                        <span className="text-[11px] font-mono text-[#555555]">
                          ({item.installBase})
                        </span>
                      </div>
                      <div className="text-xs text-[#888888]">
                        {item.vulnerability}
                      </div>
                    </div>

                    <div className="flex items-center gap-3 shrink-0 pt-0.5">
                      <span className="text-[11px] font-mono text-[#777777]">
                        {item.severity}
                      </span>
                      <ChevronRight 
                        className={`w-3.5 h-3.5 text-[#555555] transition-transform duration-200 ${
                          isExpanded ? 'rotate-90 text-[#ededed]' : 'group-hover:text-[#888888]'
                        }`} 
                      />
                    </div>
                  </div>

                  {/* Expanded Technical Details & Diff */}
                  {isExpanded && (
                    <div className="pt-2 space-y-3 font-mono text-xs">
                      <p className="text-[#a1a1aa] font-sans text-xs leading-relaxed">
                        {item.summary}
                      </p>

                      <div className="rounded-lg bg-[#0a0a0a] border border-[#1a1a1a] p-3 overflow-x-auto text-[11px] leading-relaxed text-[#888888]">
                        <pre>
                          {item.diff.split('\n').map((line, i) => {
                            let color = 'text-[#888888]';
                            if (line.startsWith('+')) color = 'text-emerald-400 bg-emerald-500/5';
                            else if (line.startsWith('-')) color = 'text-rose-400 bg-rose-500/5';
                            else if (line.startsWith('@@')) color = 'text-cyan-400';
                            return (
                              <div key={i} className={`px-1 ${color}`}>
                                {line}
                              </div>
                            );
                          })}
                        </pre>
                      </div>

                      <div className="flex items-center justify-between text-[11px] text-[#555555]">
                        <span>Classification: {item.cwe}</span>
                        <span>Year: {item.year}</span>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* Minimal Code Inspector */}
        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="text-xs font-mono uppercase tracking-widest text-[#666666]">
              Implementation Notes
            </div>
            <div className="flex items-center gap-1">
              {CODE_SNIPPETS.map((snippet, idx) => (
                <button
                  key={snippet.name}
                  onClick={() => setActiveCodeSnippet(idx)}
                  className={`text-xs font-mono px-2.5 py-1 rounded transition-colors ${
                    activeCodeSnippet === idx 
                      ? 'bg-[#1a1a1a] text-[#ededed] font-medium' 
                      : 'text-[#666666] hover:text-[#999999]'
                  }`}
                >
                  {snippet.name}
                </button>
              ))}
            </div>
          </div>

          <div className="rounded-lg bg-[#0a0a0a] border border-[#1a1a1a] p-4 relative font-mono text-xs overflow-hidden">
            <button
              onClick={() => copyCode(CODE_SNIPPETS[activeCodeSnippet].code)}
              className="absolute top-3 right-3 text-[#555555] hover:text-[#ededed] transition-colors p-1"
              title="Copy code"
            >
              {copiedSnippet ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
            </button>
            <pre className="overflow-x-auto text-[11px] text-[#999999] leading-relaxed max-h-[380px]">
              <code>{CODE_SNIPPETS[activeCodeSnippet].code}</code>
            </pre>
          </div>
        </section>

        {/* Writing & Preprints */}
        <section className="space-y-6">
          <div className="text-xs font-mono uppercase tracking-widest text-[#666666]">
            Writing & Preprints
          </div>

          <div className="space-y-4">
            <div className="space-y-1">
              <div className="flex items-baseline justify-between">
                <span className="text-sm font-medium text-[#ededed]">
                  Low-Latency Edge Intrusion Detection via Multi-Expert Routing
                </span>
                <span className="text-xs font-mono text-[#555555]">Preprint</span>
              </div>
              <p className="text-xs text-[#888888] leading-relaxed">
                Empirical latency and classification accuracy benchmarks for a 4-layer MoE architecture running on bounded edge hardware under saturated Gigabit packet streams.
              </p>
            </div>

            <div className="space-y-1">
              <div className="flex items-baseline justify-between">
                <span className="text-sm font-medium text-[#ededed]">
                  Dissecting an IPC File Overwrite in Android Synchronization Daemons
                </span>
                <span className="text-xs font-mono text-[#555555]">Advisory</span>
              </div>
              <p className="text-xs text-[#888888] leading-relaxed">
                Technical post-mortem on unauthenticated exported broadcast receivers and relative path traversal primitives in OEM Android applications.
              </p>
            </div>
          </div>
        </section>

        {/* Minimal Footer */}
        <footer className="pt-12 border-t border-[#1a1a1a] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs font-mono text-[#555555]">
          <div>
            Ojas Mehta • Bengaluru
          </div>
          <div className="flex items-center gap-4">
            <a 
              href="https://github.com/blah-blah-cell" 
              target="_blank" 
              rel="noreferrer"
              className="hover:text-[#ededed] transition-colors"
            >
              GitHub
            </a>
            <span>•</span>
            <button 
              onClick={copyEmail}
              className="hover:text-[#ededed] transition-colors"
            >
              Email
            </button>
          </div>
        </footer>

      </main>
    </div>
  );
}
