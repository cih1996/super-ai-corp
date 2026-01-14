import React, { useState, useEffect } from 'react';
import { 
  Terminal, 
  Cpu, 
  Globe, 
  TrendingUp, 
  Search, 
  Zap, 
  ChevronRight, 
  ShieldCheck, 
  Layers,
  Code2,
  Share2,
  Eye,
  Activity,
  Box,
  MessageSquarePlus,
  ThumbsUp,
  GitPullRequest,
  Rocket
} from 'lucide-react';

const App = () => {
  const [activeTab, setActiveTab] = useState('dev');
  const [typedText, setTypedText] = useState('');
  const [uptime, setUptime] = useState(0);
  const [showPrModal, setShowPrModal] = useState(false);
  const fullText = "Autonomous AI Corp: Generating value while you sleep...";

  // Mock data for PRs
  const [proposals, setProposals] = useState([
    { id: 1, title: "AI 视频剪辑工具", author: "User_882", votes: 156, status: "High Consensus", desc: "自动提取长视频金句并生成短视频挂载到 TikTok。" },
    { id: 2, title: "Web3 链上情绪监控", author: "Alpha_Node", votes: 89, status: "Reviewing", desc: "实时抓取链上交易与社交媒体情绪的关联模型。" },
    { id: 3, title: "个人知识库 AI 助手", author: "Solo_Dev", votes: 243, status: "Triggering AI Build", desc: "基于 MCP 协议深度打通本地 Notion 与 Cursor。" },
  ]);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setTypedText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(interval);
    }, 40);
    
    const uptimeCounter = setInterval(() => {
      setUptime(prev => prev + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
      clearInterval(uptimeCounter);
    };
  }, []);

  const handleVote = (id) => {
    setProposals(proposals.map(p => p.id === id ? { ...p, votes: p.votes + 1 } : p));
  };

  const departments = {
    dev: {
      title: "AI 研发中心",
      icon: <Code2 className="w-6 h-6" />,
      desc: "2026年标准：基于多模态 Agent 自动从原型进化至生产级应用，实现 0 人员干预代码部署。",
      skills: ["全自动代码重构", "跨平台自适应架构", "AI 安全防御闭环", "自动化 API 聚合"]
    },
    marketing: {
      title: "AI 增长矩阵",
      icon: <TrendingUp className="w-6 h-6" />,
      desc: "利用 2026 神经匹配算法，自动在分布式社交网络精准投放，实现病毒式增长。",
      skills: ["神经网络受众匹配", "实时视频广告生成", "自主投放预算分配", "KOL 自动模拟互动"]
    },
    scout: {
      title: "AI 商业情报",
      icon: <Search className="w-6 h-6" />,
      desc: "全网扫描 2026 最新风向标，实时拦截竞争对手流量，自动识别下一个高价值蓝海。",
      skills: ["全球趋势预测模型", "竞品代码级监控", "自动化投资汇报", "蓝海市场自动狙击"]
    }
  };

  const domainMatrix = [
    { sub: "ai-saas.xxx.com", status: "Earning", task: "Revenue: $1.2k/day", color: "text-green-400" },
    { sub: "news-bot.xxx.com", status: "Active", task: "Generating 500+ Posts", color: "text-blue-400" },
    { sub: "scanner.xxx.com", status: "Scanning", task: "Competitor Detected", color: "text-orange-400" },
    { sub: "design.xxx.com", status: "Updating", task: "V3.2 Auto-Evolution", color: "text-purple-400" },
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-slate-300 font-sans selection:bg-blue-500/30">
      {/* 2026 Cyber Grid Background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-blue-500/5 blur-[120px]" />
      </div>

      {/* Top Status Bar */}
      <div className="relative z-20 bg-black/80 border-b border-white/5 backdrop-blur-xl px-6 py-2 text-[10px] font-mono flex justify-between items-center text-slate-500">
        <div className="flex gap-4">
          <span className="flex items-center gap-1"><Activity size={10} className="text-green-500" /> SERVER: GLOBAL_NODE_01</span>
          <span className="flex items-center gap-1"><Cpu size={10} /> AGENT_THROUGHPUT: 4.8t/s</span>
        </div>
        <div className="flex gap-4">
          <span>UPTIME: {uptime}s</span>
          <span className="text-blue-400">YEAR: 2026.Q1</span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="relative z-10 border-b border-white/5 bg-black/20 backdrop-blur-sm px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2 group cursor-pointer">
            <div className="w-8 h-8 bg-white text-black rounded flex items-center justify-center font-black">AI</div>
            <span className="text-xl font-bold tracking-tighter text-white tracking-[0.2em]">INDIVIDUAL</span>
          </div>
          <div className="hidden md:flex gap-8 text-xs font-medium uppercase tracking-widest text-slate-500">
            <a href="#" className="hover:text-white transition-colors">Infrastructure</a>
            <a href="#" className="hover:text-white transition-colors">Agent_Pool</a>
            <a href="#" className="hover:text-white transition-colors">Consensus</a>
          </div>
          <div className="flex items-center gap-4">
            <div className="hidden sm:block text-right">
              <div className="text-[10px] text-slate-500 uppercase tracking-tighter">Total Valuation</div>
              <div className="text-sm font-mono text-white">$2.4M</div>
            </div>
            <button className="bg-blue-600 hover:bg-blue-500 text-white px-5 py-2 rounded text-xs font-bold transition-all shadow-lg shadow-blue-600/20">
              OWNER LOGIN
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-20 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded border border-white/10 bg-white/5 text-slate-400 text-[10px] font-mono mb-8 tracking-widest uppercase">
          Autonomous Enterprise Operating System
        </div>
        <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-white mb-8">
          超级个体 <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-slate-500">
            全自动盈利矩阵
          </span>
        </h1>
        <p className="text-lg text-slate-500 max-w-2xl mx-auto mb-12 font-mono italic">
          &gt; {typedText}<span className="animate-pulse">_</span>
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <button className="bg-white text-black px-10 py-4 rounded font-black uppercase text-sm tracking-widest hover:bg-slate-200 transition-all flex items-center gap-2">
            进入控制中心 <ChevronRight size={18} />
          </button>
          <button 
            onClick={() => setShowPrModal(true)}
            className="bg-white/5 border border-white/10 text-white px-10 py-4 rounded font-black uppercase text-sm tracking-widest hover:bg-white/10 transition-all flex items-center gap-2"
          >
            提交新 PR <MessageSquarePlus size={18} />
          </button>
        </div>
      </header>

      {/* PR / Consensus Section */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 py-20 border-t border-white/5">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="text-blue-500 font-mono text-xs mb-2 tracking-[0.3em] uppercase">Community_Driven</div>
            <h2 className="text-3xl font-bold text-white tracking-tight flex items-center gap-3">
              <GitPullRequest className="text-blue-500" /> 社区需求 PR 池
            </h2>
          </div>
          <p className="text-slate-500 text-sm max-w-md">
            当提议的共识投票超过阈值时，AI 研发中心将自动启动构建流程并分发子域名。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {proposals.sort((a, b) => b.votes - a.votes).map((pr) => (
            <div key={pr.id} className="bg-white/[0.02] border border-white/5 p-8 rounded-2xl hover:border-blue-500/30 transition-all group relative overflow-hidden">
              {pr.votes > 200 && (
                <div className="absolute top-0 right-0 bg-blue-500 text-black text-[10px] font-black px-3 py-1 flex items-center gap-1">
                  <Rocket size={10} /> AI_TRIGGERED
                </div>
              )}
              <div className="flex justify-between items-start mb-4">
                <span className="text-[10px] font-mono text-slate-500 tracking-tighter">REQ_{pr.author}</span>
                <span className={`text-[10px] font-mono px-2 py-0.5 rounded ${pr.votes > 200 ? 'bg-blue-500/10 text-blue-400' : 'bg-white/5 text-slate-500'}`}>
                  {pr.status}
                </span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">{pr.title}</h3>
              <p className="text-sm text-slate-500 mb-8 leading-relaxed italic">"{pr.desc}"</p>
              
              <div className="flex items-center justify-between mt-auto pt-6 border-t border-white/5">
                <div className="flex items-center gap-2">
                  <div className="text-2xl font-mono font-bold text-white">{pr.votes}</div>
                  <div className="text-[10px] text-slate-500 uppercase">Consensus</div>
                </div>
                <button 
                  onClick={() => handleVote(pr.id)}
                  className="p-3 rounded-full bg-white/5 hover:bg-blue-500 hover:text-white transition-all transform active:scale-90"
                >
                  <ThumbsUp size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 2026 Core Capabilities */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 py-20 border-t border-white/5">
        <div className="grid md:grid-cols-3 gap-1">
          {Object.entries(departments).map(([key, dept]) => (
            <div 
              key={key}
              onClick={() => setActiveTab(key)}
              className={`p-10 transition-all border border-white/5 ${
                activeTab === key 
                ? 'bg-white/[0.03] border-blue-500/30 z-10' 
                : 'bg-transparent hover:bg-white/[0.01]'
              }`}
            >
              <div className={`mb-8 ${activeTab === key ? 'text-blue-500' : 'text-slate-600'}`}>
                {dept.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-4 tracking-tight">{dept.title}</h3>
              <p className="text-sm text-slate-500 mb-8 leading-relaxed h-16">{dept.desc}</p>
              <div className="space-y-4">
                {dept.skills.map(skill => (
                  <div key={skill} className="flex items-center gap-3 text-[11px] font-mono tracking-wider uppercase text-slate-400">
                    <div className="w-1 h-1 bg-blue-500" /> {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Real-time Project Grid */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 py-20 border-t border-white/5">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-2xl font-bold text-white tracking-widest uppercase">子域名矩阵状态</h2>
          <div className="px-4 py-1 rounded bg-blue-500/10 text-blue-400 font-mono text-[10px] animate-pulse">
            LIVE_MONITORING
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {domainMatrix.map((item, idx) => (
            <div key={idx} className="bg-white/[0.02] border border-white/5 p-6 rounded hover:border-blue-500/30 transition-all group">
              <div className="text-[10px] font-mono text-slate-600 mb-2 uppercase">Node_{idx.toString().padStart(2, '0')}</div>
              <div className="text-white font-bold mb-1 group-hover:text-blue-400 transition-colors">{item.sub}</div>
              <div className={`text-[10px] font-mono mb-4 ${item.color}`}>{item.status}</div>
              <div className="pt-4 border-t border-white/5 text-[11px] text-slate-500 flex items-center justify-between">
                <span>{item.task}</span>
                <Box size={12} />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Autonomous Flow 2026 */}
      <section className="relative z-10 max-w-5xl mx-auto px-6 py-20 border-t border-white/5">
        <div className="flex flex-col md:flex-row gap-12">
          <div className="md:w-1/3">
            <h2 className="text-3xl font-bold text-white mb-6">自主运营链路</h2>
            <p className="text-slate-500 text-sm leading-relaxed mb-8">
              在 2026 年，公司已实现从“执行指令”到“目标自驱”的跨越。
            </p>
            <div className="p-6 border border-white/5 bg-white/[0.02] rounded-xl font-mono text-[11px]">
               <div className="text-blue-500 mb-2">// System_Log</div>
               <div className="text-slate-600">04:14:22 - Analyzing market gap...</div>
               <div className="text-slate-600">04:14:25 - Initiating micro-SaaS build...</div>
               <div className="text-green-500">04:15:01 - Deployment success.</div>
            </div>
          </div>
          <div className="md:w-2/3 space-y-4">
            {[
              { label: "认知层", content: "通过情报部自主识别老板或社区 PR 的商业机会。" },
              { label: "决策层", content: "Agent 自动编排工作流，向开发部和增长部下达任务指令。" },
              { label: "执行层", content: "代码生成、部署、SEO 优化与推文同步在 5 分钟内完成。" },
              { label: "收益层", content: "系统自动结算数字资产盈利，并决定是否追加投放。" }
            ].map((step, idx) => (
              <div key={idx} className="p-6 bg-white/[0.01] border-l-2 border-slate-800 hover:border-blue-500 transition-all flex justify-between items-center group">
                <div>
                  <div className="text-[10px] text-blue-500 font-mono mb-1 uppercase tracking-tighter">Level_0{idx+1}</div>
                  <div className="text-white font-bold text-lg mb-1">{step.label}</div>
                  <p className="text-sm text-slate-500">{step.content}</p>
                </div>
                <ChevronRight className="text-slate-800 group-hover:text-blue-500 transition-colors" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Submit PR Modal Mockup */}
      {showPrModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/90 backdrop-blur-md">
          <div className="bg-[#0a0a0a] border border-white/10 p-8 rounded-3xl max-w-lg w-full relative">
            <h2 className="text-2xl font-bold text-white mb-2">提交新的生产力 PR</h2>
            <p className="text-slate-500 text-sm mb-6 font-mono">NEW_PRODUCT_PROPOSAL_INTERFACE</p>
            
            <div className="space-y-4">
              <div>
                <label className="block text-[10px] text-slate-500 uppercase mb-2">项目标题</label>
                <input type="text" className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:border-blue-500 outline-none" placeholder="例如：自动化 SEO 内容生成器" />
              </div>
              <div>
                <label className="block text-[10px] text-slate-500 uppercase mb-2">功能描述</label>
                <textarea className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:border-blue-500 outline-none h-32" placeholder="详细说明这个工具如何提高生产力..." />
              </div>
            </div>

            <div className="flex gap-4 mt-8">
              <button 
                onClick={() => setShowPrModal(false)}
                className="flex-1 px-6 py-3 rounded-xl bg-white/5 text-white hover:bg-white/10 transition-all"
              >
                取消
              </button>
              <button 
                onClick={() => setShowPrModal(false)}
                className="flex-1 px-6 py-3 rounded-xl bg-blue-600 text-white font-bold hover:bg-blue-500 transition-all"
              >
                提交提案
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/5 py-20 px-6 mt-20 bg-black">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12 text-sm">
          <div className="col-span-2">
             <div className="flex items-center gap-2 mb-6">
                <div className="w-6 h-6 bg-white text-black flex items-center justify-center font-black text-xs">AI</div>
                <span className="font-black text-white tracking-widest">AI.CORP_2026</span>
             </div>
             <p className="text-slate-500 max-w-sm leading-relaxed">
               站在巨人的肩膀上，利用 2026 年最顶尖的系统能力，打造永不停歇的商业机器。
             </p>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Resources</h4>
            <ul className="space-y-4 text-slate-500 font-mono text-xs">
              <li className="hover:text-white cursor-pointer transition-colors">Documentation</li>
              <li className="hover:text-white cursor-pointer transition-colors">MCP_Servers</li>
              <li className="hover:text-white cursor-pointer transition-colors">API_Reference</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Legal</h4>
            <ul className="space-y-4 text-slate-500 font-mono text-xs">
              <li className="hover:text-white cursor-pointer transition-colors">Autonomous_License</li>
              <li className="hover:text-white cursor-pointer transition-colors">Agent_Privacy</li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-mono text-slate-600 uppercase tracking-widest">
          <div>&copy; 2026 AI SUPER-INDIVIDUAL CORP. BEYOND HUMAN EFFICIENCY.</div>
          <div className="flex gap-6">
            <span className="text-blue-500">System_Status: Optimal</span>
            <span>Latency: 12ms</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;