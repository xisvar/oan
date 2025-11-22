import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight, Shield, Lock, Globe, FileText, Database, Activity, Search, CheckCircle } from "lucide-react";

const LearnMore = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-white">
            <Navbar />

            <main className="pt-24 pb-16">
                {/* Header Section */}
                <section className="container px-4 sm:px-6 lg:px-8 mx-auto mb-20">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pulse-50 text-pulse-700 mb-6">
                            <span className="text-sm font-medium">Technical & Conceptual Draft</span>
                        </div>
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-gray-900 mb-8">
                            The Operating System for <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pulse-600 to-purple-600">
                                Academic Trust
                            </span>
                        </h1>
                        <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                            The Open Admissions Network is a public infrastructure layer designed to make academic admissions verifiable, traceable, and impossible to rig. It replaces opaque, discretionary selection processes with systems that produce auditable evidence for every decision.
                        </p>
                    </div>
                </section>

                {/* Core Principle */}
                <section className="bg-gray-50 py-20 mb-20">
                    <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
                        <div className="max-w-4xl mx-auto">
                            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                                <h2 className="text-2xl font-bold mb-4 text-gray-900">The Core Principle</h2>
                                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                                    Every admission decision must leave a trail. Every trail must be tamper-evident. Every step must be provable from an open set of rules.
                                </p>
                                <p className="text-gray-600">
                                    The network does this by combining <strong>append-only logs</strong>, <strong>issuer-signed records</strong>, <strong>public criteria definitions</strong>, and <strong>deterministic ranking algorithms</strong> that anyone can independently recompute. The outcome is an admissions pipeline that no single person can secretly manipulate without leaving visible fingerprints.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Why the Network Exists */}
                <section className="container px-4 sm:px-6 lg:px-8 mx-auto mb-20">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-bold mb-8 text-gray-900">Why the Network Exists</h2>
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                                <p>
                                    Today, admission decisions are locked inside private systems. If a school wants to smuggle in a name, all they do is change an internal spreadsheet. No one sees the criteria. No one sees the scoring. No one sees the ordering. There is no cryptographic signature on the data, so there is no way to prove tampering.
                                </p>
                                <p>
                                    The Network solves this by shifting admissions from <strong>trust-based</strong> to <strong>proof-based</strong>. Instead of "believe us," institutions must produce verifiable data structures that prove how they scored each applicant, when those records were created, and how final rankings were formed.
                                </p>
                            </div>
                            <div className="bg-[#0B0418] p-8 rounded-2xl border border-white/10 shadow-xl relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl -mr-32 -mt-32 group-hover:bg-purple-500/20 transition-all duration-500"></div>
                                <div className="relative z-10">
                                    <h3 className="text-xl font-bold mb-6 text-white">The Shift</h3>
                                    <ul className="space-y-6">
                                        <li className="flex items-start gap-4">
                                            <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center text-red-400 border border-red-500/20">✕</div>
                                            <div>
                                                <strong className="block text-white/90 text-lg">Old Way</strong>
                                                <span className="text-white/50 text-sm">Editable spreadsheets, hidden criteria, opaque decisions.</span>
                                            </div>
                                        </li>
                                        <li className="flex items-start gap-4">
                                            <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 border border-emerald-500/20">✓</div>
                                            <div>
                                                <strong className="block text-white text-lg">OAN Way</strong>
                                                <span className="text-white/70 text-sm">Verifiable facts, open algorithms, inspectable pipelines.</span>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Technical Deep Dive */}
                <section className="relative py-24 mb-20 overflow-hidden bg-[#0B0418]">
                    {/* Background Asset */}
                    <div className="absolute inset-0 z-0">
                        <img
                            src="/background-section3.png"
                            alt=""
                            className="w-full h-full object-cover opacity-10 mix-blend-overlay"
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-[#0B0418] via-transparent to-[#0B0418]"></div>
                    </div>

                    <div className="container relative z-10 px-4 sm:px-6 lg:px-8 mx-auto">
                        <div className="max-w-5xl mx-auto">
                            <h2 className="text-3xl font-bold mb-16 text-center text-white">How It Works: The Technical Pipeline</h2>

                            <div className="space-y-20">
                                {/* 1. Verifiable Records */}
                                <div className="flex flex-col md:flex-row gap-8 group">
                                    <div className="md:w-1/3">
                                        <div className="w-14 h-14 bg-white/5 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-4 text-pulse-400 border border-white/10 group-hover:border-pulse-500/50 group-hover:bg-pulse-500/10 transition-all duration-300">
                                            <FileText className="w-7 h-7" />
                                        </div>
                                        <h3 className="text-2xl font-bold mb-2 text-white">1. Verifiable Records</h3>
                                    </div>
                                    <div className="md:w-2/3 text-gray-400 space-y-4">
                                        <p>
                                            Every applicant submission is turned into a structured record. The system computes a unique hash for the record, which becomes the applicant’s immutable fingerprint inside the registry.
                                        </p>
                                        <p>
                                            The record is then written into an <strong className="text-pulse-300">append-only log</strong>. This log cannot be rewritten. The moment an entry is published, it becomes part of a growing chain where every new record depends on the previous one’s hash. Editing an old entry breaks the chain.
                                        </p>
                                        <p>
                                            Institutions sign the record at the moment of receipt. This signature proves who accepted the application and when.
                                        </p>
                                    </div>
                                </div>

                                {/* 2. Open Criteria */}
                                <div className="flex flex-col md:flex-row gap-8 group">
                                    <div className="md:w-1/3">
                                        <div className="w-14 h-14 bg-white/5 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-4 text-pulse-400 border border-white/10 group-hover:border-pulse-500/50 group-hover:bg-pulse-500/10 transition-all duration-300">
                                            <Database className="w-7 h-7" />
                                        </div>
                                        <h3 className="text-2xl font-bold mb-2 text-white">2. Open Criteria & Scoring</h3>
                                    </div>
                                    <div className="md:w-2/3 text-gray-400 space-y-4">
                                        <p>
                                            Every institution defines its admission rules up front in plain language and machine-readable form. The system parses these criteria into an executable scoring function.
                                        </p>
                                        <p>
                                            When a new application enters the log, the scoring function evaluates it <strong className="text-pulse-300">deterministically</strong>. The exact same function runs for everyone. No hidden adjustments. No secret exceptions.
                                        </p>
                                        <p>
                                            The eligibility score is published alongside the applicant’s record. Anyone can independently run the same function and get the same result.
                                        </p>
                                    </div>
                                </div>

                                {/* 3. Ranking */}
                                <div className="flex flex-col md:flex-row gap-8 group">
                                    <div className="md:w-1/3">
                                        <div className="w-14 h-14 bg-white/5 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-4 text-pulse-400 border border-white/10 group-hover:border-pulse-500/50 group-hover:bg-pulse-500/10 transition-all duration-300">
                                            <Activity className="w-7 h-7" />
                                        </div>
                                        <h3 className="text-2xl font-bold mb-2 text-white">3. Deterministic Ranking</h3>
                                    </div>
                                    <div className="md:w-2/3 text-gray-400 space-y-4">
                                        <p>
                                            Once all applications are logged and scored, the network orders them. The ranking algorithm is deterministic. If two different people run the sorting function on the same dataset, they get the same ordering.
                                        </p>
                                        <p>
                                            Where ties occur, the network uses quantifiable secondary metrics (time of submission, specific subject scores) defined in the public rule set. Nothing is decided behind closed doors.
                                        </p>
                                    </div>
                                </div>

                                {/* 4. Proof of Integrity */}
                                <div className="flex flex-col md:flex-row gap-8 group">
                                    <div className="md:w-1/3">
                                        <div className="w-14 h-14 bg-white/5 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-4 text-pulse-400 border border-white/10 group-hover:border-pulse-500/50 group-hover:bg-pulse-500/10 transition-all duration-300">
                                            <Shield className="w-7 h-7" />
                                        </div>
                                        <h3 className="text-2xl font-bold mb-2 text-white">4. Proof of Integrity</h3>
                                    </div>
                                    <div className="md:w-2/3 text-gray-400 space-y-4">
                                        <p>
                                            Every stage in the admission pipeline generates a cryptographic proof. Each step leaves a hash that depends on the previous step, forming a <strong className="text-pulse-300">tamper-evident audit trail</strong>.
                                        </p>
                                        <p>
                                            If any institution tries to secretly inject a new applicant, remove an old one, or modify a score, the chain breaks. Auditors, journalists, and applicants can recompute the chain independently. A mismatch exposes manipulation instantly.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Public Verification & Inspector Mode */}
                <section className="container px-4 sm:px-6 lg:px-8 mx-auto mb-20">
                    <div className="max-w-5xl mx-auto">
                        <div className="grid md:grid-cols-2 gap-12">
                            <div>
                                <h2 className="text-3xl font-bold mb-6 text-gray-900">Public Verification</h2>
                                <p className="text-lg text-gray-700 mb-6">
                                    Applicants and institutions can verify their own data publicly. By entering their application ID or scanning the offer QR code, they can confirm:
                                </p>
                                <ul className="space-y-3 text-gray-600 mb-8">
                                    <li className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-green-500" /> The application record hash</li>
                                    <li className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-green-500" /> The institution's signature</li>
                                    <li className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-green-500" /> The scoring breakdown</li>
                                    <li className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-green-500" /> The ranking position</li>
                                </ul>
                                <p className="text-gray-700">
                                    This removes ambiguity. No one can forge an offer letter. No one can hide behind claims of "the portal glitched."
                                </p>
                            </div>

                            <div className="bg-pulse-50 p-8 rounded-2xl border border-pulse-100">
                                <div className="flex items-center gap-3 mb-4">
                                    <Search className="w-6 h-6 text-pulse-600" />
                                    <h3 className="text-2xl font-bold text-gray-900">Inspector Mode</h3>
                                </div>
                                <p className="text-gray-700 mb-6">
                                    The public accountability dashboard. Inspector Mode allows anyone to:
                                </p>
                                <ul className="space-y-2 text-sm text-gray-600 mb-6">
                                    <li>• Replay the admission process</li>
                                    <li>• Recompute every score</li>
                                    <li>• Audit the ranking</li>
                                    <li>• Inspect criteria changes</li>
                                    <li>• Run tamper checks</li>
                                </ul>
                                <p className="text-sm text-gray-500 italic">
                                    *Only hashes and scores are visible, not raw personal documents.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Pipeline Summary */}
                <section className="bg-gray-50 py-20 mb-20">
                    <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
                        <div className="max-w-4xl mx-auto text-center">
                            <h2 className="text-2xl font-bold mb-12 text-gray-900">How the Whole Pipeline Connects</h2>
                            <div className="flex flex-wrap justify-center gap-4 text-sm font-medium text-gray-600">
                                <span className="px-4 py-2 bg-white rounded-full shadow-sm border border-gray-200">Application Submitted</span>
                                <span className="text-gray-400">→</span>
                                <span className="px-4 py-2 bg-white rounded-full shadow-sm border border-gray-200">Record Hashed</span>
                                <span className="text-gray-400">→</span>
                                <span className="px-4 py-2 bg-white rounded-full shadow-sm border border-gray-200">Institution Signs</span>
                                <span className="text-gray-400">→</span>
                                <span className="px-4 py-2 bg-white rounded-full shadow-sm border border-gray-200">Appended to Log</span>
                                <span className="text-gray-400">→</span>
                                <span className="px-4 py-2 bg-white rounded-full shadow-sm border border-gray-200">Scoring Computed</span>
                                <span className="text-gray-400">→</span>
                                <span className="px-4 py-2 bg-white rounded-full shadow-sm border border-gray-200">Ranking Generated</span>
                                <span className="text-gray-400">→</span>
                                <span className="px-4 py-2 bg-white rounded-full shadow-sm border border-gray-200">Offers Signed</span>
                                <span className="text-gray-400">→</span>
                                <span className="px-4 py-2 bg-pulse-100 text-pulse-700 rounded-full shadow-sm border border-pulse-200">Public Verification</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* End State / CTA */}
                <section className="container px-4 sm:px-6 lg:px-8 mx-auto py-20 text-center">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-3xl font-bold mb-6 text-gray-900">The End State</h2>
                        <p className="text-xl text-gray-600 mb-10 leading-relaxed">
                            The network builds a world where admission decisions carry proof instead of suspicion. Institutions remain autonomous but accountable. The public gains a universal mechanism to check truth. Applicants receive fairer outcomes backed by verifiable evidence.
                        </p>
                        <p className="text-lg font-medium text-gray-900 mb-10">
                            This is not a better website. This is institutional infrastructure.
                        </p>
                        <a
                            href="/#details"
                            className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white transition-all duration-200 bg-pulse-600 rounded-full hover:bg-pulse-700 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                        >
                            Join the Network
                            <ArrowRight className="ml-2 w-5 h-5" />
                        </a>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default LearnMore;
