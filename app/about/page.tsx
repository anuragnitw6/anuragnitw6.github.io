"use client";
import { useRouter } from "next/navigation";

const font = "Inter, 'Segoe UI', system-ui, -apple-system, sans-serif";

const skills = [
    "Java", "Kotlin", "Python", "JavaScript", "C/C++",
    "Android SDK", "Jetpack Compose", "MVVM", "Retrofit",
    "Dagger2", "Flutter", "AngularJS", "PHP", "MySQL", "REST APIs",
];

const experience = [
    {
        period: "Nov 2023 — Present",
        role: "Software Engineer",
        company: "Neuronwise Innovations LLP",
        location: "Noida, UP",
        points: [
            "Working on end-to-end IoT and AI-driven platforms involving embedded devices, cloud services, and dashboards.",
            "Developed and maintained ESP32-based firmware for real-time sensor data acquisition and communication.",
            "Built device-to-cloud pipelines for data ingestion, monitoring, and analytics.",
            "Projects: SAMVAAD (embedded communication & AI platform), Cold-Chain Monitoring (IoT temperature/humidity), Onion-Sense, Soil-Sense.",
        ],
    },
    {
        period: "Oct 2021 — Aug 2023",
        role: "Software Developer",
        company: "Ness Digital Engineering",
        location: "Bangalore, India (Remote)",
        points: [
            "Developed Android applications using Java and Kotlin following MVVM architecture.",
            "Migrated legacy codebases from Java to Kotlin.",
            "Integrated REST APIs using Retrofit and implemented dependency injection with Dagger2.",
            "Used coroutines and flows for asynchronous data processing and parallel API calls.",
        ],
    },
    {
        period: "Jul 2016 — Jan 2017",
        role: "Software Developer",
        company: "Eureka Technologies",
        location: "Hyderabad, India",
        points: [
            "Developed Android applications using Java and Android Studio.",
            "Integrated APIs using Volley and implemented background services.",
            "Improved application performance through debugging and optimization.",
        ],
    },
];

const education = [
    {
        period: "Jan 2013 — Jan 2016",
        degree: "Master of Computer Applications",
        institution: "National Institute of Technology, Warangal, Telangana",
    },
    {
        period: "Jan 2009 — Jan 2012",
        degree: "Bachelor of Computer Applications",
        institution: "Shree Balaji College, Sikar",
    },
];

const projects = [
    { name: "DSA Patterns", desc: "Personal learning platform for LeetCode patterns, solutions, and notes.", link: "#" },
    { name: "Cold-Chain Monitoring", desc: "IoT-based temperature and humidity monitoring system ensuring data reliability and alerting." },
    { name: "SAMVAAD", desc: "Embedded communication and AI platform enabling real-time data exchange between devices and cloud services." },
    { name: "Ahaar Buddy", desc: "Food-related application.", link: "https://ahaarbuddy.com" },
];

export default function AboutPage() {
    const router = useRouter();

    return (
        <main style={{ minHeight: "100vh", background: "#fff", fontFamily: font, color: "#09090b" }}>
            <div style={{ maxWidth: "860px", margin: "0 auto", padding: "48px 24px 96px" }}>

                {/* Header */}
                <div style={{ marginBottom: "48px", paddingBottom: "32px", borderBottom: "1px solid #f4f4f5" }}>
                    <p style={{
                        fontSize: "12px", fontWeight: 500, color: "#6366f1",
                        textTransform: "uppercase", letterSpacing: "0.08em",
                        margin: "0 0 12px", fontFamily: font,
                    }}>
                        About
                    </p>

                    <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", flexWrap: "wrap", gap: "24px" }}>
                        <div>
                            <h1 style={{
                                fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 700,
                                letterSpacing: "-0.5px", color: "#09090b",
                                margin: "0 0 6px", fontFamily: font,
                            }}>
                                Anurag Mishra
                            </h1>
                            <p style={{ fontSize: "16px", color: "#71717a", margin: "0 0 16px", fontFamily: font }}>
                                Software Engineer
                            </p>
                            <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
                                {[
                                    { label: "anuragnitw6@gmail.com", href: "mailto:anuragnitw6@gmail.com" },
                                    { label: "+91 82386 62907", href: "tel:+918238662907" },
                                    { label: "Surat, India", href: null },
                                ].map(({ label, href }) => (
                                    href ? (
                                        <a key={label} href={href} style={{
                                            fontSize: "13px", color: "#52525b", textDecoration: "none",
                                            display: "flex", alignItems: "center", gap: "4px", fontFamily: font,
                                        }}
                                            onMouseEnter={e => (e.currentTarget as HTMLAnchorElement).style.color = "#09090b"}
                                            onMouseLeave={e => (e.currentTarget as HTMLAnchorElement).style.color = "#52525b"}
                                        >{label}</a>
                                    ) : (
                                        <span key={label} style={{ fontSize: "13px", color: "#52525b", fontFamily: font }}>{label}</span>
                                    )
                                ))}
                            </div>
                        </div>

                        {/* Social links */}
                        <div style={{ display: "flex", flexDirection: "column", gap: "6px", alignItems: "flex-end" }}>
                            {[
                                { label: "GitHub", href: "https://github.com/anuragnitw6" },
                                { label: "ahaarbuddy.com", href: "https://ahaarbuddy.com" },
                            ].map(({ label, href }) => (
                                <a key={label} href={href} target="_blank" rel="noreferrer" style={{
                                    fontSize: "13px", color: "#2563eb", textDecoration: "none", fontFamily: font,
                                }}
                                    onMouseEnter={e => (e.currentTarget as HTMLAnchorElement).style.textDecoration = "underline"}
                                    onMouseLeave={e => (e.currentTarget as HTMLAnchorElement).style.textDecoration = "none"}
                                >{label} ↗</a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Summary */}
                <section style={{ marginBottom: "48px" }}>
                    <h2 style={{ fontSize: "13px", fontWeight: 600, color: "#a1a1aa", textTransform: "uppercase", letterSpacing: "0.07em", margin: "0 0 14px", fontFamily: font }}>
                        Summary
                    </h2>
                    <p style={{ fontSize: "15px", color: "#3f3f46", lineHeight: 1.8, margin: 0, fontFamily: font, fontWeight: 400, maxWidth: "680px" }}>
                        Software Engineer with experience across embedded systems, backend development, Android applications, and AI-integrated platforms. Proven ability to build end-to-end systems from device firmware to cloud dashboards. Experienced in IoT, data processing pipelines, mobile and web applications, and production-grade deployments.
                    </p>
                </section>

                {/* Skills */}
                <section style={{ marginBottom: "48px", paddingBottom: "48px", borderBottom: "1px solid #f4f4f5" }}>
                    <h2 style={{ fontSize: "13px", fontWeight: 600, color: "#a1a1aa", textTransform: "uppercase", letterSpacing: "0.07em", margin: "0 0 16px", fontFamily: font }}>
                        Skills
                    </h2>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                        {skills.map(skill => (
                            <span key={skill} style={{
                                fontSize: "13px", fontWeight: 400, padding: "4px 12px",
                                borderRadius: "99px", background: "#f4f4f5",
                                border: "1px solid #e4e4e7", color: "#3f3f46", fontFamily: font,
                            }}>
                                {skill}
                            </span>
                        ))}
                    </div>
                </section>

                {/* Experience */}
                <section style={{ marginBottom: "48px", paddingBottom: "48px", borderBottom: "1px solid #f4f4f5" }}>
                    <h2 style={{ fontSize: "13px", fontWeight: 600, color: "#a1a1aa", textTransform: "uppercase", letterSpacing: "0.07em", margin: "0 0 24px", fontFamily: font }}>
                        Experience
                    </h2>
                    <div style={{ display: "flex", flexDirection: "column", gap: "36px" }}>
                        {experience.map((exp) => (
                            <div key={exp.role + exp.company} style={{ display: "flex", gap: "24px" }}>
                                {/* Timeline dot */}
                                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", paddingTop: "4px", flexShrink: 0 }}>
                                    <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#09090b", flexShrink: 0 }} />
                                    <div style={{ width: "1px", flex: 1, background: "#f4f4f5", marginTop: "6px" }} />
                                </div>

                                <div style={{ paddingBottom: "8px", flex: 1 }}>
                                    <p style={{ fontSize: "12px", color: "#a1a1aa", margin: "0 0 4px", fontFamily: font }}>{exp.period}</p>
                                    <h3 style={{ fontSize: "15px", fontWeight: 600, color: "#09090b", margin: "0 0 2px", fontFamily: font }}>{exp.role}</h3>
                                    <p style={{ fontSize: "13px", color: "#71717a", margin: "0 0 12px", fontFamily: font }}>{exp.company} · {exp.location}</p>
                                    <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: "6px" }}>
                                        {exp.points.map((point, i) => (
                                            <li key={i} style={{ display: "flex", gap: "10px", fontSize: "14px", color: "#52525b", lineHeight: 1.65, fontFamily: font }}>
                                                <span style={{ flexShrink: 0, marginTop: "7px", width: "4px", height: "4px", borderRadius: "50%", background: "#d4d4d8", display: "inline-block" }} />
                                                {point}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Education */}
                <section style={{ marginBottom: "48px", paddingBottom: "48px", borderBottom: "1px solid #f4f4f5" }}>
                    <h2 style={{ fontSize: "13px", fontWeight: 600, color: "#a1a1aa", textTransform: "uppercase", letterSpacing: "0.07em", margin: "0 0 24px", fontFamily: font }}>
                        Education
                    </h2>
                    <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
                        {education.map((edu) => (
                            <div key={edu.degree} style={{ display: "flex", gap: "24px" }}>
                                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", paddingTop: "4px", flexShrink: 0 }}>
                                    <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#09090b" }} />
                                </div>
                                <div>
                                    <p style={{ fontSize: "12px", color: "#a1a1aa", margin: "0 0 4px", fontFamily: font }}>{edu.period}</p>
                                    <h3 style={{ fontSize: "15px", fontWeight: 600, color: "#09090b", margin: "0 0 2px", fontFamily: font }}>{edu.degree}</h3>
                                    <p style={{ fontSize: "13px", color: "#71717a", margin: 0, fontFamily: font }}>{edu.institution}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Projects */}
                <section style={{ marginBottom: "48px", paddingBottom: "48px", borderBottom: "1px solid #f4f4f5" }}>
                    <h2 style={{ fontSize: "13px", fontWeight: 600, color: "#a1a1aa", textTransform: "uppercase", letterSpacing: "0.07em", margin: "0 0 16px", fontFamily: font }}>
                        Projects
                    </h2>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: "12px" }}>
                        {projects.map(({ name, desc, link }) => (
                            <div key={name} style={{
                                padding: "18px 20px", borderRadius: "10px",
                                border: "1px solid #e4e4e7", background: "#fafafa",
                            }}>
                                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "6px" }}>
                                    <h3 style={{ fontSize: "14px", fontWeight: 600, color: "#09090b", margin: 0, fontFamily: font }}>{name}</h3>
                                    {link && (
                                        <a href={link} target="_blank" rel="noreferrer" style={{ fontSize: "12px", color: "#a1a1aa", textDecoration: "none" }}>↗</a>
                                    )}
                                </div>
                                <p style={{ fontSize: "13px", color: "#71717a", margin: 0, lineHeight: 1.6, fontFamily: font }}>{desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Achievement */}
                <section>
                    <h2 style={{ fontSize: "13px", fontWeight: 600, color: "#a1a1aa", textTransform: "uppercase", letterSpacing: "0.07em", margin: "0 0 14px", fontFamily: font }}>
                        Achievement
                    </h2>
                    <div style={{
                        padding: "16px 20px", borderRadius: "8px",
                        background: "#fafafa", border: "1px solid #e4e4e7",
                        borderLeft: "3px solid #18181b",
                    }}>
                        <p style={{ fontSize: "14px", color: "#3f3f46", margin: 0, fontFamily: font }}>
                            🏆 Ranked 1st in Rajasthan for MCA entrance examination
                        </p>
                    </div>
                </section>

            </div>
        </main>
    );
}