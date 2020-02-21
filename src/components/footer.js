import React from 'react';

const Footer = () => {
    return (
        <footer style={{
        }}>
            <div style={{ lineHeight: 0.3, textAlign: 'center', marginTop: 50 }} >
                <p>© {new Date().getFullYear()} innerpolish.netlify.com</p>
                <p>Website created by <a href="https://github.com/Sharqiewicz" target="blank">Sharqiewicz</a></p>
            </div>
        </footer>
    )
}

export default Footer;