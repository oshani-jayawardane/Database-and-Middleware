const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <footer>
            <p>Copyrights © Millennium IT ESP | {year}</p>
        </footer>
    );
}

export default Footer;