import Link from 'next/link';

export default ({ currentUser }) => {
    const links = [
        !currentUser && { label: 'Sign Up', href: '/auth/signup' },
        !currentUser && { label: 'Sign In', href: '/auth/signin' },
        currentUser && { label: 'Sing Out', href: '/auth/signout' }
    ]
        .filter(linkConfig => linkConfig)
        .map(({ label, href }) => {
            return <li key={href} className='nav-item'>
                <Link href={href} className='nav-link'>
                    {label}
                </Link>
            </li>;
        });

    return <nav className="navbar navbar-light bg-light">
        <Link className="navbar-brand" href="/">
            GitTix
        </Link>
        <div className='d-flex justify-content-end'>
            <ul className='nav d-flex align-items-center'>
                {links}
            </ul>
        </div>
    </nav>
};