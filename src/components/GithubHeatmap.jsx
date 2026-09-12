//WORK IN PROGRESS IMPLEMENT ONE DAY




import React, { useEffect, useState } from 'react';
import { Activity, ExternalLink } from 'lucide-react';
import { ActivityCalendar } from 'react-activity-calendar';
import { personalInfo } from '../data/portfolioData';

export const GithubHeatmap = () => {
    const [calendarData, setCalendarData] = useState([]);
    const [totalContributions, setTotalContributions] = useState(0);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCalendar = async () => {
            // Endpoint fallback order to completely bypass CORS issues
            const endpoints = [
                `https://github-contributions-api.deno.dev/${personalInfo.handle}.json`,
                `https://rpi3.jasonet.co/v1/${personalInfo.handle}`,
                `https://corsproxy.io/?${encodeURIComponent(`https://github-contributions-api.jasonet.co/v1/${personalInfo.handle}`)}`
            ];

            for (const url of endpoints) {
                try {
                    const res = await fetch(url);
                    if (!res.ok) continue;

                    const resData = await res.json();

                    // Format payload for react-activity-calendar contract
                    const rawContributions = resData.contributions || resData.days || [];
                    if (Array.isArray(rawContributions) && rawContributions.length > 0) {

                        // Flatten nested week structure if returned by deno.dev API
                        const flatDays = Array.isArray(rawContributions[0])
                            ? rawContributions.flat()
                            : rawContributions;

                        const formatted = flatDays.map((day) => ({
                            date: day.date,
                            count: day.count,
                            level: day.level ?? day.intensity ?? Math.min(4, Math.floor(day.count / 3)),
                        }));

                        const total = resData.totalExact || resData.total || formatted.reduce((acc, d) => acc + d.count, 0);

                        setCalendarData(formatted);
                        setTotalContributions(total);
                        setLoading(false);
                        return; // Exit successfully
                    }
                } catch (err) {
                    console.warn(`Failed to fetch from ${url}, attempting fallback...`);
                }
            }

            setLoading(false);
        };

        fetchCalendar();
    }, []);

    // Strict GitHub Dark Mode Charcoal & Emerald Palette
    const explicitTheme = {
        dark: ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353'],
    };

    return (
        <section id="github-activity" className="py-12 sm:py-16 relative border-t border-term-border/40">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Section Header */}
                <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-6 gap-4">
                    <div>
                        <div className="font-mono text-xs text-term-green flex items-center gap-2 mb-2">
                            <span>03.1</span>
                            <span>// CONTRIBUTION TELEMETRY</span>
                        </div>
                        <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                            GitHub Submissions <span className="text-term-green">Heatmap</span>
                        </h2>
                    </div>

                    <a
                        href={personalInfo.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-mono text-xs text-term-dim hover:text-term-green bg-term-card px-3 py-1.5 rounded border border-term-border flex items-center gap-2 transition-colors w-fit"
                    >
                        <Activity className="w-3.5 h-3.5 text-term-green" />
                        <span>@{personalInfo.handle} on GitHub</span>
                        <ExternalLink className="w-3 h-3 ml-1" />
                    </a>
                </div>

                {/* Heatmap Card */}
                <div className="p-4 sm:p-6 rounded-xl bg-[#0d1117] border border-[#30363d] shadow-2xl overflow-hidden">

                    {/* Top Header with Total Contributions */}
                    <div className="font-mono text-xs text-[#8b949e] mb-4 flex items-center justify-between">
                        <span className="text-slate-200 font-semibold">
                            {totalContributions > 0
                                ? `${totalContributions} contributions in the last year`
                                : '# Live contribution activity graph'}
                        </span>
                        <span className="text-term-green text-[10px]">BRANCH: main</span>
                    </div>

                    {/* ActivityCalendar Container */}
                    <div className="w-full overflow-x-auto pb-2 flex justify-center bg-[#0d1117] rounded-lg p-2">
                        {!loading && calendarData.length > 0 ? (
                            <ActivityCalendar
                                data={calendarData}
                                theme={explicitTheme}
                                colorScheme="dark"
                                blockSize={12}
                                blockMargin={4}
                                fontSize={12}
                                showWeekdayLabels
                            />
                        ) : (
                            <div className="h-32 flex items-center justify-center font-mono text-xs text-[#8b949e]">
                                <span>{loading ? "Fetching live contribution matrix..." : "Unable to load contribution matrix."}</span>
                            </div>
                        )}
                    </div>

                    {/* Footer Info */}
                    <div className="mt-4 pt-3 border-t border-[#21262d] flex flex-wrap items-center justify-between font-mono text-xs text-[#8b949e] gap-2">
                        <span>Source: https://github.com/bruhmemer123</span>
                        <a
                            href={personalInfo.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-term-green hover:underline flex items-center gap-1"
                        >
                            <span>View full profile</span> &rarr;
                        </a>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default GithubHeatmap;