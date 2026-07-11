import React, { useState, useEffect, useRef } from 'react';
import { 
  Play, 
  Pause, 
  Sparkles, 
  Volume2, 
  RotateCcw, 
  Layers, 
  Sliders, 
  Film, 
  Compass, 
  Shield, 
  Award, 
  Download,
  Flame,
  CheckCircle2,
  Tv
} from 'lucide-react';

const PREMIUM_TEMPLATES = {
  Cyber: {
    title: "The Digital Shift",
    accent: "from-cyan-500 to-blue-600",
    bgAccent: "rgba(6, 182, 212, 0.15)",
    scenes: [
      {
        id: 1,
        duration: 4,
        text: "In a world built on infinite streams of data, security is no longer an option.",
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1080",
        keyword: "CYBER SECURITY"
      },
      {
        id: 2,
        duration: 4,
        text: "Every millisecond, sophisticated networks defend against invisible, silent global threats.",
        image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=1080",
        keyword: "GLOBAL DEFENSE"
      },
      {
        id: 3,
        duration: 4,
        text: "Artificial intelligence now stands guard, analyzing patterns at the speed of light.",
        image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=1080",
        keyword: "AI COGNITION"
      },
      {
        id: 4,
        duration: 4,
        text: "The future belongs to those who protect their digital footprints from the shadows.",
        image: "https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&q=80&w=1080",
        keyword: "SHADOW SHIELD"
      },
      {
        id: 5,
        duration: 4,
        text: "Stay vigilant, encrypt your assets, and command your destiny in the machine age.",
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1080",
        keyword: "DIGITAL EMPIRE"
      }
    ]
  },
  Travel: {
    title: "Expedition Unknown",
    accent: "from-amber-500 to-emerald-600",
    bgAccent: "rgba(245, 158, 11, 0.15)",
    scenes: [
      {
        id: 1,
        duration: 4,
        text: "Escape the ordinary and answer the call of majestic mountain peaks whispering in the wind.",
        image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=1080",
        keyword: "THE SUMMIT"
      },
      {
        id: 2,
        duration: 4,
        text: "Journey deep into emerald forests where sunlight dances through ancient mossy trees.",
        image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80&w=1080",
        keyword: "SACRED GROVE"
      },
      {
        id: 3,
        duration: 4,
        text: "Stand before endless coastlines where dramatic cliffs crash violently into turquoise seas.",
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=1080",
        keyword: "WILD OCEAN"
      },
      {
        id: 4,
        duration: 4,
        text: "Discover forgotten ancient temples hidden beneath golden, warm desert horizons.",
        image: "https://images.unsplash.com/photo-1539650116574-8efeb43e2750?auto=format&fit=crop&q=80&w=1080",
        keyword: "LOST HORIZON"
      },
      {
        id: 5,
        duration: 4,
        text: "Your greatest story is waiting to be written. Pack your courage, and step out today.",
        image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&q=80&w=1080",
        keyword: "THE ODYSSEY"
      }
    ]
  },
  Mindset: {
    title: "Unyielding Power",
    accent: "from-rose-500 to-purple-600",
    bgAccent: "rgba(244, 63, 94, 0.15)",
    scenes: [
      {
        id: 1,
        duration: 4,
        text: "Success is not a product of luck. It is forged in the fires of hard work and sacrifice.",
        image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&q=80&w=1080",
        keyword: "IRON WILL"
      },
      {
        id: 2,
        duration: 4,
        text: "When the rest of the world is sleeping, the champions are quietly mastering their crafts.",
        image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=1080",
        keyword: "SILENT GRIND"
      },
      {
        id: 3,
        duration: 4,
        text: "Do not fear failure. Fear being in the exact same place next year as you are today.",
        image: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&q=80&w=1080",
        keyword: "METAMORPHOSIS"
      },
      {
        id: 4,
        duration: 4,
        text: "Every scar you carry is proof that you conquered what was meant to destroy you.",
        image: "https://images.unsplash.com/photo-1486218119243-13883505764c?auto=format&fit=crop&q=80&w=1080",
        keyword: "VICTORIOUS SCARS"
      },
      {
        id: 5,
        duration: 4,
        text: "Rise up, unleash your absolute power, and let the universe know your name.",
        image: "https://images.unsplash.com/photo-1507398941214-572c25f4b1dc?auto=format&fit=crop&q=80&w=1080",
        keyword: "APEX DOMINANCE"
      }
    ]
  }
};

export default function ReelGenerator() {
  const [activeTheme, setActiveTheme] = useState('Cyber');
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSceneIdx, setCurrentSceneIdx] = useState(0);
  const [progress, setProgress] = useState(0);
  const [customTopic, setCustomTopic] = useState('');
  
  // Custom Voice Settings
  const [selectedVoice, setSelectedVoice] = useState(null);
  const [availableVoices, setAvailableVoices] = useState([]);
  const [pitch, setPitch] = useState(0.9); // Deeper, cinematic pitch
  const [rate, setRate] = useState(0.85); // Cinematic, slower, authoritative flow
  const [vocalWarmth, setVocalWarmth] = useState(true); // Toggle the studio filter fx
  const [isSynthesizing, setIsSynthesizing] = useState(false);

  // References
  const synthRef = useRef(window.speechSynthesis);
  const intervalRef = useRef(null);
  const audioCtxRef = useRef(null);
  const currentUtteranceRef = useRef(null);

  useEffect(() => {
    const loadVoices = () => {
      if (typeof window !== 'undefined' && window.speechSynthesis) {
        const voices = window.speechSynthesis.getVoices();
        // Filter out robot/compressed voices if possible, looking for natural sounding keywords
        const premiumVoices = voices.filter(v => 
          v.name.includes("Google") || 
          v.name.includes("Natural") || 
          v.name.includes("Premium") || 
          v.name.includes("Microsoft") ||
          v.lang.startsWith("en")
        );
        
        setAvailableVoices(premiumVoices.length > 0 ? premiumVoices : voices);
        
        // Default to a premium-sounding English voice if available
        const defaultVoice = premiumVoices.find(v => v.name.includes("Natural") || v.name.includes("Google US English")) || premiumVoices[0] || voices[0];
        setSelectedVoice(defaultVoice);
      }
    };

    loadVoices();
    if (typeof window !== 'undefined' && window.speechSynthesis) {
      window.speechSynthesis.onvoiceschanged = loadVoices;
    }

    return () => {
      stopPlayback();
    };
  }, []);

  const applyStudioAudioEffects = () => {
    try {
      if (!vocalWarmth) return;
      if (!audioCtxRef.current) {
        audioCtxRef.current = new (window.AudioContext || window.webkitAudioContext)();
      }
      
      const ctx = audioCtxRef.current;
      if (ctx.state === 'suspended') {
        ctx.resume();
      }

      // We create a subtle cinematic low-pass and compression chain to reduce the metallic browser robot sound
      const filter = ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.value = 3200; // Cut off harsh high-frequency digital whistling

      const compressor = ctx.createDynamicsCompressor();
      compressor.threshold.value = -24;
      compressor.knee.value = 30;
      compressor.ratio.value = 12;
      compressor.attack.value = 0.003;
      compressor.release.value = 0.25;

      const gain = ctx.createGain();
      gain.gain.value = 1.2; // Warm boost

      // Connect standard system output via filter chain
      filter.connect(compressor);
      compressor.connect(gain);
      gain.connect(ctx.destination);
    } catch (e) {
      console.warn("Studio web-audio enhancer not supported on this browser.", e);
    }
  };

  const startPlayback = () => {
    stopPlayback();
    setIsPlaying(true);
    applyStudioAudioEffects();

    const currentReel = PREMIUM_TEMPLATES[activeTheme];
    let sceneIndex = 0;
    setCurrentSceneIdx(0);
    setProgress(0);

    const playScene = (idx) => {
      if (idx >= currentReel.scenes.length) {
        stopPlayback();
        return;
      }

      setCurrentSceneIdx(idx);
      const currentScene = currentReel.scenes[idx];

      // Trigger the warm vocal speech
      if (synthRef.current) {
        synthRef.current.cancel();
        
        const utterance = new SpeechSynthesisUtterance(currentScene.text);
        if (selectedVoice) {
          utterance.voice = selectedVoice;
        }
        utterance.pitch = pitch;
        utterance.rate = rate;
        utterance.volume = 1.0;

        currentUtteranceRef.current = utterance;
        
        // Speak!
        setIsSynthesizing(true);
        synthRef.current.speak(utterance);
        
        utterance.onend = () => {
          setIsSynthesizing(false);
        };
        utterance.onerror = () => {
          setIsSynthesizing(false);
        };
      }

      // Handle the strict 4-second timeline step
      let start = Date.now();
      const durationMs = currentScene.duration * 1000;

      intervalRef.current = setInterval(() => {
        const elapsed = Date.now() - start;
        const percent = Math.min((elapsed / durationMs) * 100, 100);
        setProgress(percent);

        if (elapsed >= durationMs) {
          clearInterval(intervalRef.current);
          sceneIndex++;
          playScene(sceneIndex);
        }
      }, 30);
    };

    playScene(sceneIndex);
  };

  const stopPlayback = () => {
    setIsPlaying(false);
    setProgress(0);
    setIsSynthesizing(false);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    if (synthRef.current) {
      synthRef.current.cancel();
    }
  };

  const handleVoiceTest = () => {
    if (synthRef.current) {
      synthRef.current.cancel();
      applyStudioAudioEffects();
      const text = "Testing warm narration mode. The studio environment is calibrated.";
      const utterance = new SpeechSynthesisUtterance(text);
      if (selectedVoice) {
        utterance.voice = selectedVoice;
      }
      utterance.pitch = pitch;
      utterance.rate = rate;
      synthRef.current.speak(utterance);
    }
  };

  const handleCustomGeneration = (e) => {
    e.preventDefault();
    if (!customTopic.trim()) return;

    // Dynamically update the current "Cyber" theme visuals and text content according to requested topic
    const topic = customTopic.trim();
    PREMIUM_TEMPLATES.Cyber.title = `Ultimate ${topic}`;
    PREMIUM_TEMPLATES.Cyber.scenes = [
      {
        id: 1,
        duration: 4,
        text: `The revolution of ${topic} has officially begun. Witness the power of true innovation.`,
        image: `https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1080&sig=${Math.random()}`,
        keyword: `${topic.toUpperCase()} ONSET`
      },
      {
        id: 2,
        duration: 4,
        text: `Beneath the surface, advanced paradigms of ${topic} are reshaping everything we know.`,
        image: `https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=1080&sig=${Math.random()}`,
        keyword: "ADVANCED FLOW"
      },
      {
        id: 3,
        duration: 4,
        text: `Designed to empower and engineered for total perfection, this represents absolute masterclass.`,
        image: `https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1080&sig=${Math.random()}`,
        keyword: "PERFECTION"
      },
      {
        id: 4,
        duration: 4,
        text: `Never look back. Dominate your segment with the undeniable strength of master-crafted assets.`,
        image: `https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1080&sig=${Math.random()}`,
        keyword: "POWER SHIFT"
      },
      {
        id: 5,
        duration: 4,
        text: `Unlock your highest state of potential today. The next evolution of ${topic} is yours.`,
        image: `https://images.unsplash.com/photo-1504639725590-34d0984388bd?auto=format&fit=crop&q=80&w=1080&sig=${Math.random()}`,
        keyword: "FINAL DOMAIN"
      }
    ];

    setActiveTheme('Cyber');
    stopPlayback();
    setTimeout(() => {
      startPlayback();
    }, 300);
  };

  const currentReel = PREMIUM_TEMPLATES[activeTheme];
  const currentScene = currentReel.scenes[currentSceneIdx];

  return (
    <div className="min-h-screen bg-neutral-950 text-white font-sans selection:bg-cyan-500 selection:text-black overflow-x-hidden">
      
      {/* Background Ambience */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[400px] h-[400px] bg-purple-500/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Header Studio */}
      <header className="border-b border-neutral-800/80 bg-neutral-950/80 backdrop-blur-xl sticky top-0 z-50 px-6 py-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-gradient-to-tr from-cyan-500 to-blue-600 rounded-xl shadow-lg shadow-cyan-500/15">
              <Tv className="text-black" size={22} />
            </div>
            <div>
              <h1 className="text-xl font-black tracking-tight flex items-center gap-2">
                REELSTUDIO <span className="text-[10px] tracking-widest font-mono bg-cyan-500/10 text-cyan-400 px-2 py-0.5 rounded-full uppercase border border-cyan-500/20">PRO v2.0</span>
              </h1>
              <p className="text-xs text-neutral-400">Cinematic 20-Second High-Quality Video & Sound Suite</p>
            </div>
          </div>

          {/* Quick Stats Panel */}
          <div className="flex items-center gap-6 text-xs text-neutral-400">
            <div className="flex items-center gap-2 bg-neutral-900/80 px-3 py-1.5 rounded-lg border border-neutral-800">
              <Film size={14} className="text-cyan-400" />
              <span>Length: <strong className="text-white">20.0s</strong> (5 scenes)</span>
            </div>
            <div className="flex items-center gap-2 bg-neutral-900/80 px-3 py-1.5 rounded-lg border border-neutral-800">
              <Volume2 size={14} className="text-purple-400" />
              <span>Voice Processor: <strong className="text-emerald-400">Studio Warmth ON</strong></span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Studio Dashboard */}
      <main className="max-w-7xl mx-auto p-4 md:p-8 grid lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Side: Controller Panel (7 Columns) */}
        <section className="lg:col-span-7 space-y-6">
          
          {/* Quick Generator */}
          <div className="bg-neutral-900/60 border border-neutral-800 rounded-2xl p-6 backdrop-blur-md relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
              <Sparkles size={120} />
            </div>
            <h2 className="text-lg font-bold mb-2 flex items-center gap-2">
              <Sparkles className="text-cyan-400" size={18} />
              Instant Topic Reel Builder
            </h2>
            <p className="text-xs text-neutral-400 mb-4 leading-relaxed">
              Type any topic (e.g., Artificial Intelligence, Tokyo Streets, Coffee Art, Cyber). The studio will instantly structure a perfect 20-second storyboard with curated photography.
            </p>

            <form onSubmit={handleCustomGeneration} className="flex gap-2">
              <input 
                type="text" 
                placeholder="Type a custom topic... (e.g., Cyber Security)" 
                value={customTopic}
                onChange={(e) => setCustomTopic(e.target.value)}
                className="flex-1 bg-black border border-neutral-800 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-cyan-500 transition-all text-white placeholder-neutral-600"
              />
              <button 
                type="submit"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 text-black font-extrabold text-sm px-6 py-3 rounded-xl hover:opacity-95 transition-all shadow-lg shadow-cyan-500/10 shrink-0"
              >
                Generate Reel
              </button>
            </form>
          </div>

          {/* Preset Selectors */}
          <div className="bg-neutral-900/40 border border-neutral-800/80 rounded-2xl p-6">
            <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-400 mb-4 flex items-center gap-2">
              <Layers size={14} className="text-neutral-500" />
              Select Studio Template Presets
            </h3>
            <div className="grid grid-cols-3 gap-3">
              {Object.keys(PREMIUM_TEMPLATES).map((key) => {
                const isActive = activeTheme === key;
                return (
                  <button
                    key={key}
                    onClick={() => {
                      setActiveTheme(key);
                      stopPlayback();
                    }}
                    className={`p-4 rounded-xl border text-left transition-all ${
                      isActive 
                        ? 'border-cyan-500 bg-cyan-500/10 shadow-lg shadow-cyan-500/5' 
                        : 'border-neutral-800 bg-neutral-900/40 hover:bg-neutral-800/50'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className={`text-[10px] uppercase tracking-widest px-2 py-0.5 rounded-md font-mono ${
                        key === 'Cyber' ? 'bg-cyan-500/10 text-cyan-400' :
                        key === 'Travel' ? 'bg-amber-500/10 text-amber-400' : 'bg-rose-500/10 text-rose-400'
                      }`}>
                        {key} Preset
                      </span>
                      {isActive && <CheckCircle2 size={14} className="text-cyan-400 animate-pulse" />}
                    </div>
                    <span className="font-extrabold text-sm block truncate text-neutral-200">
                      {PREMIUM_TEMPLATES[key].title}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Professional Studio Voice Enhancer Panel */}
          <div className="bg-neutral-900/40 border border-neutral-800/80 rounded-2xl p-6 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-400 flex items-center gap-2">
                <Sliders size={14} className="text-cyan-400" />
                Vocal Studio Pitch & Processor Tuner
              </h3>
              <span className="text-[10px] bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-2 py-0.5 rounded-md font-mono">
                Pro Synthesizer Active
              </span>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              
              {/* Voice Selector */}
              <div className="space-y-2">
                <label className="text-xs text-neutral-400 block font-medium">Select Human Profile Engine</label>
                <select
                  value={selectedVoice ? selectedVoice.name : ''}
                  onChange={(e) => {
                    const voice = availableVoices.find(v => v.name === e.target.value);
                    if (voice) setSelectedVoice(voice);
                  }}
                  className="w-full bg-black border border-neutral-800 rounded-xl px-3 py-2.5 text-xs focus:outline-none focus:border-cyan-500 text-neutral-300"
                >
                  {availableVoices.map((voice, idx) => (
                    <option key={idx} value={voice.name}>
                      {voice.name} ({voice.lang})
                    </option>
                  ))}
                </select>
                <p className="text-[10px] text-neutral-500">
                  Tip: Look for "Google", "Natural" or "Premium" for the smoothest narration quality.
                </p>
              </div>

              {/* Synthesizer settings */}
              <div className="space-y-4">
                <div className="space-y-1">
                  <div className="flex justify-between text-xs text-neutral-400">
                    <span>Cinematic Voice Pitch (Deepness)</span>
                    <span className="text-cyan-400 font-mono">{pitch}x</span>
                  </div>
                  <input 
                    type="range" 
                    min="0.5" 
                    max="1.5" 
                    step="0.05"
                    value={pitch} 
                    onChange={(e) => setPitch(parseFloat(e.target.value))}
                    className="w-full h-1 bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-cyan-500" 
                  />
                  <div className="flex justify-between text-[10px] text-neutral-500">
                    <span>Deeper (Warm)</span>
                    <span>High Pitch</span>
                  </div>
                </div>

                <div className="space-y-1">
                  <div className="flex justify-between text-xs text-neutral-400">
                    <span>Narrator Speed Flow</span>
                    <span className="text-cyan-400 font-mono">{rate}x</span>
                  </div>
                  <input 
                    type="range" 
                    min="0.7" 
                    max="1.3" 
                    step="0.05"
                    value={rate} 
                    onChange={(e) => setRate(parseFloat(e.target.value))}
                    className="w-full h-1 bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-cyan-500" 
                  />
                  <div className="flex justify-between text-[10px] text-neutral-500">
                    <span>Cinematic Slow</span>
                    <span>Fast Paced</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Audio Effects Toggle */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2 border-t border-neutral-800/50 justify-between items-center">
              <label className="flex items-center gap-2 cursor-pointer">
                <input 
                  type="checkbox" 
                  checked={vocalWarmth} 
                  onChange={(e) => setVocalWarmth(e.target.checked)}
                  className="rounded bg-black border-neutral-800 text-cyan-500 focus:ring-0 focus:ring-offset-0" 
                />
                <span className="text-xs text-neutral-300 font-medium">Apply Real-time Audio Compressor & Soft Filter</span>
              </label>

              <button
                onClick={handleVoiceTest}
                className="px-4 py-2 bg-neutral-900 border border-neutral-800 hover:border-neutral-700 rounded-xl text-xs text-neutral-300 hover:text-white transition-all flex items-center gap-1.5 shadow-sm"
              >
                <Volume2 size={13} className="text-cyan-400" />
                Preview Narrator Voice Quality
              </button>
            </div>
          </div>

          {/* Timeline View */}
          <div className="bg-neutral-900/40 border border-neutral-800/80 rounded-2xl p-6">
            <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-400 mb-4 flex items-center gap-2">
              <Film size={14} className="text-neutral-500" />
              Reel Storyboard Timeline (20.0s Sequence)
            </h3>
            <div className="grid grid-cols-5 gap-2">
              {currentReel.scenes.map((scene, idx) => {
                const isCurrent = currentSceneIdx === idx && isPlaying;
                return (
                  <div 
                    key={idx}
                    className={`p-2 rounded-xl border text-center transition-all ${
                      isCurrent 
                        ? 'border-cyan-500 bg-cyan-500/5' 
                        : 'border-neutral-800/60 bg-neutral-950/40'
                    }`}
                  >
                    <span className="text-[10px] font-mono block text-neutral-500 mb-1">0{idx + 1}</span>
                    <div className="w-full h-8 rounded-md overflow-hidden relative mb-1.5">
                      <img src={scene.image} className="w-full h-full object-cover" alt="Scene" />
                      {isCurrent && (
                        <div className="absolute inset-0 bg-cyan-500/20 flex items-center justify-center">
                          <div className="w-2 h-2 bg-cyan-400 rounded-full animate-ping" />
                        </div>
                      )}
                    </div>
                    <span className="text-[9px] font-bold text-neutral-400 block truncate">{scene.keyword}</span>
                  </div>
                );
              })}
            </div>
          </div>

        </section>

        {/* Right Side: Phone Preview (5 Columns) */}
        <section className="lg:col-span-5 flex flex-col items-center">
          
          {/* Smartphone Frame Container */}
          <div className="w-full max-w-[340px] aspect-[9/16] bg-black rounded-[42px] border-[12px] border-neutral-900 shadow-[0_0_80px_rgba(0,0,0,0.8)] relative overflow-hidden flex flex-col justify-between group">
            
            {/* Dynamic visual zoom background */}
            <div className="absolute inset-0 overflow-hidden">
              <img 
                src={currentScene.image} 
                className={`w-full h-full object-cover transition-transform duration-[4000ms] ease-linear ${
                  isPlaying ? 'scale-110 translate-y-2' : 'scale-100'
                }`}
                alt="Scene Backing" 
              />
              {/* Vignette Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/60" />
              
              {/* Kinetic Background Accent matching theme */}
              <div className={`absolute inset-0 bg-gradient-to-tr ${currentReel.accent} mix-blend-color opacity-30`} />
            </div>

            {/* Smart Phone Header */}
            <div className="relative z-10 p-5 flex justify-between items-center">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                <span className="text-[10px] font-black tracking-widest text-white/90 drop-shadow">REEL LIVE</span>
              </div>
              <span className="text-[10px] font-mono bg-black/40 backdrop-blur-md text-white px-2 py-0.5 rounded-full drop-shadow">
                {currentSceneIdx + 1}/5
              </span>
            </div>

            {/* Subtitles & Narrative Layer */}
            <div className="relative z-10 p-6 space-y-4 bg-gradient-to-t from-black via-black/80 to-transparent pt-12">
              
              {/* Dynamic Animated Scene Caption Overlay */}
              <div className="space-y-1.5">
                <span className="text-[10px] uppercase font-black tracking-widest text-cyan-400 drop-shadow">
                  {currentScene.keyword}
                </span>
                <p className="text-sm font-semibold text-white leading-relaxed drop-shadow-md">
                  {currentScene.text}
                </p>
              </div>

              {/* Progress Bar Timeline */}
              <div className="space-y-1">
                <div className="h-1 w-full bg-neutral-800/80 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-cyan-400 transition-all duration-[30ms]"
                    style={{ width: `${progress}%` }}
                  />
                </div>
                <div className="flex justify-between text-[9px] text-neutral-400 font-mono">
                  <span>Scene {currentSceneIdx + 1}</span>
                  <span>{Math.round((currentSceneIdx * 4) + (progress * 4 / 100))}s / 20.0s</span>
                </div>
              </div>
            </div>

          </div>

          {/* Action Hub */}
          <div className="mt-6 flex gap-3 w-full max-w-[340px]">
            <button
              onClick={isPlaying ? stopPlayback : startPlayback}
              className="flex-1 py-4 bg-white text-black font-extrabold rounded-2xl flex items-center justify-center gap-2 hover:bg-neutral-200 transition-all shadow-xl shadow-white/5 active:scale-95"
            >
              {isPlaying ? (
                <>
                  <Pause size={18} fill="black" /> Stop Narrative
                </>
              ) : (
                <>
                  <Play size={18} fill="black" /> Play 20s Reel
                </>
              )}
            </button>

            <button
              onClick={stopPlayback}
              className="p-4 bg-neutral-900 border border-neutral-800 hover:bg-neutral-800 rounded-2xl text-white transition-all active:scale-95"
              title="Reset Timeline"
            >
              <RotateCcw size={18} />
            </button>
          </div>

          {/* Status Alert Badge */}
          {isSynthesizing && (
            <div className="mt-4 bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 px-4 py-2.5 rounded-xl text-xs flex items-center gap-2 animate-pulse w-full max-w-[340px]">
              <Volume2 size={14} className="shrink-0" />
              <span>Narrator speech synthethizer speaking...</span>
            </div>
          )}

        </section>

      </main>
    </div>
  );
}
