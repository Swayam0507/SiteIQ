import React, { useEffect } from 'react';
import { Building2, Globe, Shield, Target, ArrowRight, CheckCircle2, ChevronRight, BarChart3, Database, Zap, MapPin, Cpu, Layers, FileText, Code2, Sparkles, Navigation } from 'lucide-react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

const FeatureCard: React.FC<{ icon: React.ReactNode; badge: string; title: string; desc: string; highlights: string[] }> = ({ icon, badge, title, desc, highlights }) => (
  <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between">
    <div>
      <div className="flex items-center justify-between mb-6">
        <div className="w-14 h-14 rounded-2xl bg-indigo-50 flex items-center justify-center text-indigo-600">
          {icon}
        </div>
        <span className="text-[11px] font-extrabold uppercase tracking-wider px-3 py-1 bg-indigo-50/80 text-indigo-600 rounded-full border border-indigo-100">
          {badge}
        </span>
      </div>
      <h3 className="text-xl font-black text-slate-800 mb-3 tracking-tight">{title}</h3>
      <p className="text-slate-500 leading-relaxed text-sm mb-6">{desc}</p>
    </div>
    <ul className="space-y-2 pt-4 border-t border-slate-100">
      {highlights.map((item, idx) => (
        <li key={idx} className="flex items-center gap-2 text-xs font-semibold text-slate-700">
          <CheckCircle2 size={14} className="text-emerald-500 flex-shrink-0" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  </div>
);

const AboutPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex-1 overflow-y-auto bg-slate-50">
      
      {/* ── HERO SECTION ── */}
      <section className="relative pt-24 pb-20 md:pt-32 md:pb-28 bg-white border-b border-slate-100 overflow-hidden">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[500px] h-[500px] bg-gradient-to-br from-indigo-50 to-emerald-50 rounded-full blur-3xl opacity-60 animate-pulse-ring" />
        
        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-indigo-50 text-indigo-700 font-bold text-xs rounded-full mb-8 border border-indigo-100 shadow-sm">
            <Sparkles size={14} className="text-indigo-600" /> Enterprise Spatial Site Readiness Platform
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight leading-[1.15] mb-8">
            AI-Powered Location Intelligence & <span className="text-indigo-600">Spatial Econometric Analytics</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto font-medium mb-10">
            SiteIQ is an end-to-end geospatial analytical engine designed for commercial real estate, retail expansion, and urban infrastructure planning. It synthesizes multi-layer spatial vector data into instantaneous, actionable site readiness index scores (0–100) and location feasibility grades ($A$ through $F$).
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link to="/analysis" className="inline-flex items-center gap-2 px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-2xl shadow-lg shadow-indigo-600/20 transition-all hover:-translate-y-0.5">
              Launch Interactive Map Engine <ArrowRight size={18} />
            </Link>
            <a href="https://github.com/Swayam0507/SiteIQ" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-4 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-2xl transition-all">
              <Code2 size={18} /> View Source on GitHub
            </a>
          </div>
        </div>
      </section>

      {/* ── CORE CAPABILITIES GRID ── */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-xs font-bold text-indigo-600 tracking-widest uppercase mb-3">System Capabilities</h2>
          <h3 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight">
            How SiteIQ Powers Site Selection
          </h3>
          <p className="text-slate-500 mt-4 max-w-2xl mx-auto text-base">
            Combining high-concurrency FastAPI computations with MapLibre GL JS vector rendering and Uber H3 spatial indexing.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <FeatureCard
            icon={<MapPin size={26} />}
            badge="0–100 Scoring"
            title="Interactive Site Feasibility Engine"
            desc="Click anywhere on the interactive vector map to evaluate candidate locations against 5 spatial layers: Demographics, Transit Proximity, Competition Density, Land-Use Zoning, and Environmental Risk."
            highlights={[
              "Exponential Distance-Decay Modeling",
              "Dynamic Grade Generation (A to F)",
              "Hard Constraint Zoning Validation"
            ]}
          />

          <FeatureCard
            icon={<Cpu size={26} />}
            badge="Uber H3 & DBSCAN"
            title="Hexagonal Spatial Aggregation"
            desc="Utilizes Uber H3 discrete global grid system (Resolutions 8 & 9) combined with DBSCAN density clustering to discover high-potential commercial hotspots and spatial market density."
            highlights={[
              "Multi-Resolution Hexagonal Overlays",
              "DBSCAN Cluster Hotspot Detection",
              "Sub-Second Spatial Aggregation"
            ]}
          />

          <FeatureCard
            icon={<Navigation size={26} />}
            badge="Isochrone Reachability"
            title="Real-Time Catchment Analysis"
            desc="Calculates reachable drive-time, walk-time, and cycle-time boundary polygons for 5, 10, and 15-minute intervals using OpenRouteService with geometric fallback algorithms."
            highlights={[
              "Driving, Walking & Cycling Modes",
              "Multi-Ring Isochrone Polygon Layers",
              "Demographic Population Catchment"
            ]}
          />

          <FeatureCard
            icon={<BarChart3 size={26} />}
            badge="Recharts Polar Radar"
            title="Multi-Site Comparison Engine"
            desc="Pin candidate sites to compare demographic strength, transit accessibility, competitive saturation, zoning compatibility, and environmental safety side-by-side."
            highlights={[
              "Animated Polar Radar Visualization",
              "Multi-Location Pinning & Memory",
              "Side-by-Side Spatial Breakdown"
            ]}
          />

          <FeatureCard
            icon={<FileText size={26} />}
            badge="ReportLab PDF Export"
            title="Executive PDF Site Brief Generator"
            desc="Serialize comprehensive spatial analysis metrics, breakdown charts, threshold warnings, and location recommendations into downloadable executive PDF reports."
            highlights={[
              "Instant Offline PDF Generation",
              "Executive Site Selection Summary",
              "Detailed Layer Metrics Breakdown"
            ]}
          />

          <FeatureCard
            icon={<Database size={26} />}
            badge="Dual Database Engine"
            title="Enterprise Data Layer"
            desc="Features an adaptive database engine supporting PostgreSQL, PostGIS, and NeonDB Cloud for production pooling, with an automatic embedded SQLite fallback for offline execution."
            highlights={[
              "PostgreSQL + PostGIS Cloud Pooling",
              "Zero-Config Embedded SQLite Fallback",
              "JWT Auth & User History Storage"
            ]}
          />
        </div>
      </section>

      {/* ── SPATIAL ECONOMETRIC METHODOLOGY ── */}
      <section className="py-24 bg-white border-y border-slate-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-indigo-50 text-indigo-600 font-bold text-xs rounded-full mb-4">
                <Layers size={14} /> Econometric Methodology
              </div>
              <h3 className="text-3xl md:text-4xl font-black text-slate-900 mb-6 tracking-tight leading-tight">
                Multi-Layer Spatial Scoring Model
              </h3>
              <p className="text-slate-600 leading-relaxed mb-6 font-medium">
                The composite readiness score ($S$) evaluates candidate coordinates across 5 weighted spatial layers tailored for dense urban markets:
              </p>
              
              <div className="space-y-4">
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="w-3 h-3 rounded-full bg-indigo-600" />
                    <span className="font-extrabold text-slate-800 text-sm">Demographics Layer</span>
                  </div>
                  <span className="font-black text-indigo-600 text-sm">30% Weight</span>
                </div>
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="w-3 h-3 rounded-full bg-blue-500" />
                    <span className="font-extrabold text-slate-800 text-sm">Transportation & Transit</span>
                  </div>
                  <span className="font-black text-blue-600 text-sm">25% Weight</span>
                </div>
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="w-3 h-3 rounded-full bg-purple-500" />
                    <span className="font-extrabold text-slate-800 text-sm">Competition & POI Density</span>
                  </div>
                  <span className="font-black text-purple-600 text-sm">20% Weight</span>
                </div>
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="w-3 h-3 rounded-full bg-amber-500" />
                    <span className="font-extrabold text-slate-800 text-sm">Land-Use & Zoning</span>
                  </div>
                  <span className="font-black text-amber-600 text-sm">15% Weight</span>
                </div>
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="w-3 h-3 rounded-full bg-emerald-500" />
                    <span className="font-extrabold text-slate-800 text-sm">Environmental & Flood Risk</span>
                  </div>
                  <span className="font-black text-emerald-600 text-sm">10% Weight</span>
                </div>
              </div>
            </div>

            <div className="bg-slate-900 p-8 md:p-10 rounded-[2.5rem] text-white shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-indigo-500/20 rounded-full blur-3xl" />
              <h4 className="text-xl font-black mb-4 tracking-tight text-white flex items-center gap-2">
                <Zap size={20} className="text-amber-400" /> Distance-Decay Formula
              </h4>
              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                Spatial metrics utilize an exponential distance-decay model to penalize features farther from the target coordinate:
              </p>
              <div className="p-4 bg-slate-800/80 rounded-2xl border border-slate-700 font-mono text-indigo-300 text-sm mb-6 text-center">
                Score(d) = Base_Score × exp(-λ × d)
              </div>
              <p className="text-slate-400 text-xs leading-relaxed mb-6">
                Where <code className="text-amber-300">d</code> is distance in kilometers and <code className="text-amber-300">λ</code> represents calibrated decay constants (<code className="text-indigo-300">λ_highway = 0.6</code>, <code className="text-indigo-300">λ_transit = 0.4</code>, <code className="text-indigo-300">λ_flood = 1.2</code>).
              </p>

              <div className="pt-6 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
                <span>Model Version: <strong>v2.0.0</strong></span>
                <span>Response Speed: <strong>&lt; 200ms</strong></span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── DEVELOPER / CREATOR SECTION ── */}
      <section className="py-24 max-w-5xl mx-auto px-6">
        <div className="bg-gradient-to-br from-indigo-950 via-slate-900 to-slate-950 rounded-[2.5rem] p-10 md:p-14 text-white shadow-2xl relative overflow-hidden border border-indigo-900/50">
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-indigo-600/10 rounded-full blur-3xl" />
          
          <div className="relative z-10 grid md:grid-cols-3 gap-8 items-center">
            <div className="md:col-span-2">
              <span className="inline-flex items-center gap-2 px-3 py-1 bg-indigo-500/20 text-indigo-300 font-bold text-xs rounded-full mb-4 border border-indigo-500/30">
                <Code2 size={14} /> Created & Developed By
              </span>
              <h3 className="text-3xl font-black text-white mb-4 tracking-tight">
                Swayam
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-6 font-medium">
                Designed and built **SiteIQ** as a full-stack spatial econometric application. Combines modern web UI engineering (React 19, TypeScript, Deck.gl, MapLibre GL) with concurrent Python GIS backend development (FastAPI, GeoPandas, Shapely, Uber H3, ReportLab, PostgreSQL/SQLite).
              </p>
              
              <div className="flex flex-wrap gap-3">
                <a href="https://github.com/Swayam0507" target="_blank" rel="noopener noreferrer" className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs rounded-xl transition-colors inline-flex items-center gap-2">
                  <Globe size={14} /> GitHub Profile @Swayam0507
                </a>
                <a href="https://github.com/Swayam0507/SiteIQ" target="_blank" rel="noopener noreferrer" className="px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs rounded-xl transition-colors inline-flex items-center gap-2">
                  <Code2 size={14} /> SiteIQ Repository
                </a>
              </div>
            </div>

            <div className="bg-slate-900/80 p-6 rounded-2xl border border-slate-800 text-center">
              <div className="w-16 h-16 rounded-2xl bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400 mx-auto mb-4 font-black text-xl">
                S
              </div>
              <h4 className="text-white font-extrabold text-base mb-1">Full-Stack Spatial Engineer</h4>
              <p className="text-slate-400 text-xs mb-4">Spatial Econometrics & Web Systems</p>
              <div className="text-[11px] text-emerald-400 font-bold bg-emerald-500/10 py-1.5 px-3 rounded-full border border-emerald-500/20 inline-block">
                Open Source & Portfolio Project
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CALL TO ACTION ── */}
      <section className="py-20 max-w-4xl mx-auto px-6 text-center">
        <h3 className="text-3xl md:text-4xl font-black text-slate-900 mb-6 tracking-tight">
          Ready to Analyze Spatial Locations?
        </h3>
        <p className="text-slate-500 max-w-xl mx-auto text-base mb-8">
          Explore interactive site selection, run isochrone catchment boundaries, or generate binary PDF reports directly.
        </p>
        <Link to="/analysis" className="inline-flex items-center gap-2 px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-2xl shadow-lg shadow-indigo-600/20 transition-all hover:-translate-y-0.5">
          Launch Analysis Engine <ArrowRight size={18} />
        </Link>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;
