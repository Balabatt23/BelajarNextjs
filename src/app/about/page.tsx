import Link from "next/link";
import Navbar from "../components/Navbar";
import Card from "./components/Card";

export default function About() {
    return (
        <main className="p-6 font-sans">
        <Navbar />
            <Card title="About Us" description="Learn more about our company and values." />
            <Card title="Our Mission" description="To deliver the best products and services to our customers." />
        </main>
    );
}