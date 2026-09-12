import { useState, useRef, useEffect, useCallback } from 'react';
import { Terminal as TermIcon, CornerDownLeft, Sparkles, ExternalLink, Mail, Check, Copy } from 'lucide-react';
import { personalInfo, systemSpecs, skillsData, projectsData, timelineData } from '../data/portfolioData';

const EmailCopyButton = ({ email }) => {
  const [copied, setCopied] = useState(false);
  const handleCopy = (e) => {
    e.stopPropagation();
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <button
      onClick={handleCopy}
      type="button"
      className="flex items-center gap-1 text-[10px] px-2 py-0.5 rounded bg-slate-800 text-term-dim hover:text-term-green"
    >
      {copied ? <Check className="w-3 h-3 text-term-green" /> : <Copy className="w-3 h-3" />}
      <span>{copied ? 'Copied' : 'Copy'}</span>
    </button>
  );
};

const availableCommands = [
  'help',
  'about',
  'skills',
  'projects',
  'experience',
  'contact',
  'sudo hire-me',
  'clear',
  'whoami',
  'specs',
  'date',
];

const quickActionChips = [
  { label: 'help', cmd: 'help' },
  { label: 'about', cmd: 'about' },
  { label: 'skills', cmd: 'skills' },
  { label: 'projects', cmd: 'projects' },
  { label: 'contact', cmd: 'contact' },
  { label: 'sudo hire-me', cmd: 'sudo hire-me' },
  { label: 'clear', cmd: 'clear' },
];

export const TerminalWidget = ({ onNavigateSection }) => {
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState([
    {
      id: 'init-1',
      command: 'welcome',
      type: 'welcome',
      timestamp: '12:00:00',
    }
  ]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [commandLog, setCommandLog] = useState([]);

  const terminalContainerRef = useRef(null);
  const inputRef = useRef(null);
  const entryCountRef = useRef(1);
  const executeRef = useRef(null);

  const executeCommand = useCallback((rawCmd) => {
    const trimmed = rawCmd.trim();
    if (!trimmed) return;

    // Add to command history list for up/down navigation
    setCommandLog(prev => [...prev, trimmed]);
    setHistoryIndex(-1);

    const cmdLower = trimmed.toLowerCase();

    if (cmdLower === 'clear') {
      setHistory([]);
      setInputVal('');
      return;
    }

    entryCountRef.current += 1;
    const newEntry = {
      id: `entry-${entryCountRef.current}`,
      command: trimmed,
      timestamp: 'ready',
      type: 'custom',
    };

    switch (cmdLower) {
      case 'help':
        newEntry.content = (
          <div className="space-y-2 text-xs font-mono">
            <p className="text-term-cyan font-semibold">Available Shell Commands:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1.5 pl-2 text-slate-300">
              <div><span className="text-term-green font-bold">about</span> <span className="text-term-dim">— Developer bio & background</span></div>
              <div><span className="text-term-green font-bold">skills</span> <span className="text-term-dim">— Technical capabilities & tools</span></div>
              <div><span className="text-term-green font-bold">projects</span> <span className="text-term-dim">— Featured works & repositories</span></div>
              <div><span className="text-term-green font-bold">experience</span> <span className="text-term-dim">— Work & education milestones</span></div>
              <div><span className="text-term-green font-bold">contact</span> <span className="text-term-dim">— Get in touch with email & socials</span></div>
              <div><span className="text-term-green font-bold">specs</span> <span className="text-term-dim">— System & environment specs</span></div>
              <div><span className="text-term-green font-bold">sudo hire-me</span> <span className="text-term-dim">— Easter egg privileged command</span></div>
              <div><span className="text-term-green font-bold">clear</span> <span className="text-term-dim">— Reset terminal display</span></div>
            </div>
            <p className="text-[11px] text-term-dim pt-1 italic">
              Tip: Click the quick chips above the prompt or press Arrow Up/Down for command history.
            </p>
          </div>
        );
        break;

      case 'about':
        newEntry.content = (
          <div className="space-y-2 text-xs font-mono">
            <div className="text-term-green font-bold flex items-center gap-2">
              <span>● {personalInfo.name}</span>
              <span className="text-term-dim text-[11px]">({personalInfo.location})</span>
            </div>
            <p className="text-slate-300 leading-relaxed">{personalInfo.bio}</p>
            <div className="p-2 bg-term-bg/60 rounded border border-term-border text-term-cyan text-[11px]">
              Status: <span className="text-term-green">{personalInfo.status}</span>
            </div>
            <div className="pt-1">
              <a 
                href="#about" 
                onClick={(e) => { e.preventDefault(); onNavigateSection?.('about'); }}
                className="text-term-green hover:underline inline-flex items-center gap-1 text-[11px]"
              >
                <span>Jump to full About dossier</span> →
              </a>
            </div>
          </div>
        );
        break;

      case 'skills':
        newEntry.content = (
          <div className="space-y-2 text-xs font-mono">
            <p className="text-term-cyan font-bold">Technical Stack & Telemetry:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px]">
              {skillsData.map((cat) => (
                <div key={cat.category} className="p-2 rounded bg-term-bg/60 border border-term-border">
                  <div className="text-term-green font-bold mb-1">[{cat.category}]</div>
                  <div className="text-slate-300 flex flex-wrap gap-1">
                    {cat.skills.map(s => (
                      <span key={s.name} className="px-1.5 py-0.5 rounded bg-slate-800 text-slate-200">
                        {s.name}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <a 
              href="#skills" 
              onClick={(e) => { e.preventDefault(); onNavigateSection?.('skills'); }}
              className="text-term-green hover:underline inline-flex items-center gap-1 text-[11px] pt-1"
            >
              <span>View visual skill proficiency bars</span> →
            </a>
          </div>
        );
        break;

      case 'projects':
        newEntry.content = (
          <div className="space-y-2.5 text-xs font-mono">
            <p className="text-term-cyan font-bold">Featured Repositories & Deployments:</p>
            <div className="space-y-2">
              {projectsData.slice(0, 3).map((proj) => (
                <div key={proj.id} className="p-2.5 rounded bg-term-bg/80 border border-term-border hover:border-term-green/40 transition-colors">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-term-green font-bold">{proj.title}</span>
                    <span className="text-[10px] text-term-dim px-1.5 py-0.5 rounded bg-slate-800 border border-slate-700">
                      git:{proj.branch}
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-400 mt-0.5">{proj.tagline}</p>
                  
                  {/* Clickable inline links as requested! */}
                  <div className="flex flex-wrap items-center gap-3 mt-2 text-[11px]">
                    <a
                      href={proj.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-term-cyan hover:text-cyan-300 hover:underline font-semibold"
                    >
                      <ExternalLink className="w-3 h-3" />
                      <span>Live Demo</span>
                    </a>
                    <a
                      href={proj.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-slate-300 hover:text-term-green hover:underline"
                    >
                      <span>source code</span> ↗
                    </a>
                  </div>
                </div>
              ))}
            </div>
            <a 
              href="#projects" 
              onClick={(e) => { e.preventDefault(); onNavigateSection?.('projects'); }}
              className="text-term-green hover:underline inline-flex items-center gap-1 text-[11px]"
            >
              <span>Explore full searchable project catalog</span> →
            </a>
          </div>
        );
        break;

      case 'experience':
        newEntry.content = (
          <div className="space-y-2 text-xs font-mono">
            <p className="text-term-cyan font-bold">Git Log Commit Timeline:</p>
            <div className="space-y-1.5 pl-2 border-l-2 border-term-border">
              {timelineData.map((item, idx) => (
                <div key={idx} className="relative pl-3">
                  <div className="flex items-center gap-2">
                    <span className="text-term-green font-bold">commit {item.commitHash}</span>
                    <span className="text-term-dim text-[10px]">({item.date})</span>
                  </div>
                  <div className="text-slate-200 font-medium">{item.role} @ {item.organization}</div>
                </div>
              ))}
            </div>
            <a 
              href="#experience" 
              onClick={(e) => { e.preventDefault(); onNavigateSection?.('experience'); }}
              className="text-term-green hover:underline inline-flex items-center gap-1 text-[11px] pt-1"
            >
              <span>Inspect full graph logs</span> →
            </a>
          </div>
        );
        break;

      case 'contact':
        newEntry.content = (
          <div className="space-y-2 text-xs font-mono">
            <p className="text-term-cyan font-bold">Contact Channels & Endpoints:</p>
            <div className="space-y-1.5">
              {/* Clickable inline email with 1-click copy */}
              <div className="flex items-center justify-between p-2 rounded bg-term-bg/80 border border-term-border">
                <div className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-term-green" />
                  <a href={`mailto:${personalInfo.email}`} className="text-slate-200 hover:text-term-green hover:underline">
                    {personalInfo.email}
                  </a>
                </div>
                <EmailCopyButton email={personalInfo.email} />
              </div>

              <div className="flex flex-wrap gap-2 text-[11px]">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-2 py-1 rounded bg-term-bg border border-term-border text-slate-300 hover:text-term-green hover:border-term-green/40 flex items-center gap-1"
                >
                  <span>github.com/{personalInfo.handle}</span>
                  <ExternalLink className="w-2.5 h-2.5" />
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-2 py-1 rounded bg-term-bg border border-term-border text-slate-300 hover:text-term-cyan hover:border-term-cyan/40 flex items-center gap-1"
                >
                  <span>linkedin.com/in/{personalInfo.handle}</span>
                  <ExternalLink className="w-2.5 h-2.5" />
                </a>
              </div>
            </div>
            <a 
              href="#contact" 
              onClick={(e) => { e.preventDefault(); onNavigateSection?.('contact'); }}
              className="text-term-green hover:underline inline-flex items-center gap-1 text-[11px] pt-1"
            >
              <span>Launch interactive contact transmission form</span> →
            </a>
          </div>
        );
        break;

      case 'specs':
      case 'neofetch':
        newEntry.content = (
          <div className="text-xs font-mono space-y-1 p-2 bg-term-bg/60 rounded border border-term-border">
            <div className="text-term-green font-bold pb-1 border-b border-term-border">SYSTEM TELEMETRY REPORT</div>
            <div><span className="text-term-dim">OS:</span> {systemSpecs.os}</div>
            <div><span className="text-term-dim">Shell:</span> {systemSpecs.shell}</div>
            <div><span className="text-term-dim">Editor:</span> {systemSpecs.editor}</div>
            <div><span className="text-term-dim">Terminal:</span> {systemSpecs.terminal}</div>
            <div><span className="text-term-dim">Uptime:</span> <span className="text-term-green">{systemSpecs.uptime}</span></div>
            <div><span className="text-term-dim">Current Focus:</span> {systemSpecs.currentFocus}</div>
          </div>
        );
        break;

      case 'whoami':
        newEntry.content = (
          <div className="text-xs font-mono text-slate-300">
            visitor@internet (guest session with full read-only clearance)
          </div>
        );
        break;

      case 'date':
        newEntry.content = (
          <div className="text-xs font-mono text-slate-300">
            {new Date().toString()}
          </div>
        );
        break;

      case 'sudo hire-me':
      case 'hire-me':
        newEntry.content = (
          <div className="p-3 rounded bg-emerald-950/40 border border-term-green/50 text-xs font-mono space-y-2">
            <div className="flex items-center gap-2 text-term-green font-bold text-sm">
              <Sparkles className="w-4 h-4 text-term-green animate-pulse" />
              <span>[200 OK] Privilege Elevation Granted!</span>
            </div>
            <p className="text-slate-300">
              Outstanding choice. You have unlocked developer recruitment priority queue.
            </p>
            <div className="flex items-center gap-2 pt-1">
              <a
                href="#contact"
                onClick={(e) => { e.preventDefault(); onNavigateSection?.('contact'); }}
                className="px-3 py-1 rounded bg-term-green text-black font-bold hover:bg-emerald-400 transition-colors inline-flex items-center gap-1.5"
              >
                <span>Initiate Contact Transmission</span>
                <CornerDownLeft className="w-3 h-3" />
              </a>
            </div>
          </div>
        );
        break;

      default:
        newEntry.content = (
          <div className="text-xs font-mono text-red-400 space-y-1">
            <p>zsh: command not found: {trimmed}</p>
            <p className="text-term-dim text-[11px]">
              Type <button onClick={() => executeRef.current?.('help')} className="text-term-green underline">help</button> to see valid commands.
            </p>
          </div>
        );
    }

    setHistory(prev => [...prev, newEntry]);
    setInputVal('');
  }, [onNavigateSection]);

  useEffect(() => {
    executeRef.current = executeCommand;
  }, [executeCommand]);

  useEffect(() => {
    if (terminalContainerRef.current) {
      terminalContainerRef.current.scrollTop = terminalContainerRef.current.scrollHeight;
    }
  }, [history]);

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      executeCommand(inputVal);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandLog.length === 0) return;
      const nextIdx = historyIndex === -1 ? commandLog.length - 1 : Math.max(0, historyIndex - 1);
      setHistoryIndex(nextIdx);
      setInputVal(commandLog[nextIdx]);
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex === -1) return;
      const nextIdx = historyIndex + 1;
      if (nextIdx < commandLog.length) {
        setHistoryIndex(nextIdx);
        setInputVal(commandLog[nextIdx]);
      } else {
        setHistoryIndex(-1);
        setInputVal('');
      }
    } else if (e.key === 'Tab') {
      e.preventDefault();
      const current = inputVal.trim().toLowerCase();
      if (!current) return;
      const match = availableCommands.find(c => c.startsWith(current));
      if (match) {
        setInputVal(match);
      }
    }
  };

  return (
    <div className="w-full rounded-xl bg-term-card/95 border border-term-border shadow-2xl shadow-black/80 overflow-hidden flex flex-col font-mono text-xs sm:text-sm">
      
      {/* Terminal Title Bar */}
      <div className="px-4 py-2.5 bg-slate-900/90 border-b border-term-border flex items-center justify-between select-none">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-[#ef4444] border border-red-600/30"></div>
          <div className="w-3 h-3 rounded-full bg-[#f59e0b] border border-amber-600/30"></div>
          <div className="w-3 h-3 rounded-full bg-[#10b981] border border-emerald-600/30"></div>
          <span className="text-[11px] text-term-dim ml-2 flex items-center gap-1.5 hidden sm:inline-flex">
            <TermIcon className="w-3 h-3 text-term-green" />
            <span>affan@developer-terminal: ~ (zsh)</span>
          </span>
        </div>

        <div className="flex items-center gap-2 text-[10px] text-term-dim">
          <span className="px-1.5 py-0.5 rounded bg-slate-800 border border-slate-700 text-term-green">
            interactive v1.2
          </span>
        </div>
      </div>

      {/* Terminal Output Log Canvas */}
      <div 
        ref={terminalContainerRef}
        onClick={() => inputRef.current?.focus()} 
        className="p-4 sm:p-5 h-[320px] sm:h-[360px] overflow-y-auto space-y-4 cursor-text bg-gradient-to-b from-[#0a0d14]/90 to-[#0e121c]/95"
      >
        {/* Welcome greeting */}
        <div className="text-xs text-term-dim border-b border-term-border/40 pb-3 space-y-1">
          <div className="text-term-green font-bold flex items-center gap-2">
            <span>● Terminal Shell Ready</span>
            <span className="text-term-dim font-normal text-[11px]">Type commands or tap quick pills</span>
          </div>
          <p className="text-slate-400 text-[11px]">
            Explore Affan&apos;s interactive portfolio via this terminal widget. Type <span className="text-term-green">help</span> or tap pills below.
          </p>
        </div>

        {/* History stream */}
        {history.map((item) => {
          if (item.type === 'welcome') return null;
          return (
            <div key={item.id} className="space-y-1.5">
              <div className="flex items-center gap-2 text-slate-400">
                <span className="text-term-green font-bold">visitor@portfolio:~$</span>
                <span className="text-slate-100 font-semibold">{item.command}</span>
                <span className="text-term-dim text-[10px] ml-auto">{item.timestamp}</span>
              </div>
              <div className="pl-2 pt-0.5 border-l border-term-green/20">
                {item.content}
              </div>
            </div>
          );
        })}
      </div>

      {/* Mobile-First Command Chips Bar (Guarantees mobile accessibility without typing) */}
      <div className="px-3 py-2 bg-slate-900/80 border-t border-term-border flex items-center gap-1.5 overflow-x-auto scrollbar-none">
        <span className="text-[10px] text-term-dim uppercase tracking-wider font-bold shrink-0 hidden sm:inline">
          Quick:
        </span>
        {quickActionChips.map((chip) => (
          <button
            key={chip.cmd}
            type="button"
            onClick={() => executeCommand(chip.cmd)}
            className="px-2.5 py-1 rounded bg-term-bg hover:bg-term-hover border border-term-border hover:border-term-green/50 text-slate-300 hover:text-term-green text-[11px] font-mono whitespace-nowrap transition-all flex items-center gap-1 shrink-0"
          >
            <span>{chip.label}</span>
          </button>
        ))}
      </div>

      {/* Interactive Input Prompt */}
      <div className="px-3 sm:px-4 py-2.5 bg-term-bg border-t border-term-border flex items-center gap-2">
        <div className="flex items-center gap-1.5 text-term-green font-bold shrink-0 text-xs">
          <span>visitor@portfolio:~$</span>
        </div>
        
        <input
          ref={inputRef}
          type="text"
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="type 'help', 'about', 'projects'..."
          aria-label="Terminal command input"
          className="w-full bg-transparent text-slate-100 placeholder-slate-600 focus:outline-none text-xs font-mono"
        />

        <button
          onClick={() => executeCommand(inputVal)}
          type="button"
          aria-label="Run command"
          className="p-1 rounded bg-term-card border border-term-border hover:border-term-green text-term-dim hover:text-term-green transition-colors"
        >
          <CornerDownLeft className="w-3.5 h-3.5" />
        </button>
      </div>

    </div>
  );
};
export default TerminalWidget;
