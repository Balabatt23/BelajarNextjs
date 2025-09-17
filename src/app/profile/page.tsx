import Link from "next/link";
import Navbar from "../components/Navbar";

export default function Profile() {
    return (
        <main className="p-6 font-sans">
        <Navbar />
        <h1 className="text-3xl font-bold text-blue-600">Profile Page</h1>
        <p className="mt-2">Nama : Muhamad Yuki</p>
        <p>NIM : 3312401023</p>
        <p>Jurusan : Teknik Informatika</p>
    </main>
    );
}