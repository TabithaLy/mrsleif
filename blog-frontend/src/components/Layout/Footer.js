import React from 'react';
import '../utils/main.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGoodreads, faTwitter, faPinterest } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
    return (
        <footer className="footer">
        <div className="footer">
            <a href="https://www.facebook.com/MrsLeifsbookreviews">
                <FontAwesomeIcon icon={faFacebook} style={{ fontSize: "3rem" }} />
            </a>
            <a href="https://x.com/i/flow/login?redirect_after_login=%2FMrsLeifs_2Fangs">
                <FontAwesomeIcon icon={faTwitter} style={{ fontSize: "3rem" }} />
            </a>
            <a href="https://www.pinterest.com/mrsleif1/">
                <FontAwesomeIcon icon={faPinterest} style={{ fontSize: "3rem" }} />
            </a>
            <a href="https://www.goodreads.com/user/show/4627974-sheyla">
                <FontAwesomeIcon icon={faGoodreads} style={{ fontSize: "3rem" }} />
            </a>
        </div>
        </footer>
    );
}