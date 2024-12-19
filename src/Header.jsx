import { Outlet, Link } from 'react-router-dom'


const Header = () => {
    return (
        <div>
            <header style={{
                display: 'flex',
                columnGap: '20px',
                padding: '20px',
                background: '#252525'
            }}>
                <Link style={{
                    color: '#fff',
                    fontSize: '30px'
                }} to={'/'}>Logo</Link>
                <Link style={{
                    color: '#fff',
                    fontSize: '20px',
                }} to={'/'}>Home</Link>
                <Link style={{
                    color: '#fff',
                    fontSize: '20px'
                }} to={'/page1'}>Page1</Link>
                <Link style={{
                    color: '#fff',
                    fontSize: '20px'
                }} to={'/page2'}>Page2</Link>
            </header>
            <Outlet/>
        </div>
    );
}

export default Header;