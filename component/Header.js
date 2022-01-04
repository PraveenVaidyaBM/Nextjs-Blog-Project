import Link from 'next/link';

export default function Header() {
    return (
        <header>
            <div>
                <Link href='/'>
                    <h2 align='center'>Praveen Vaidya</h2>
                </Link>
            </div>
        </header>
    );
}