import PropTypes from 'prop-types';
import {
    EmailIcon,
    EmailShareButton,
    FacebookIcon,
    FacebookShareButton,
    LinkedinIcon,
    LinkedinShareButton,
    PinterestIcon,
    PinterestShareButton,
    TelegramIcon,
    TelegramShareButton,
    TwitterShareButton,
    WhatsappIcon,
    WhatsappShareButton,
    XIcon,
} from "react-share";

const Share = ({ title, link }) => {
    const pglink = `https://decode.vercel.com/${link}`;
    return (
        <section className='mt-4 leading-7 pl-1'>
            <div className='flex flex-row justify-start gap-x-2.5'>
                    <FacebookShareButton url={pglink}>
                        <FacebookIcon size={24} round />
                    </FacebookShareButton>
                    <TwitterShareButton url={pglink} title={title}>
                        <XIcon size={24} round />
                    </TwitterShareButton>
                    <TelegramShareButton url={pglink} title={title}>
                        <TelegramIcon size={24} round />
                    </TelegramShareButton>
                    <WhatsappShareButton url={pglink} title={title} separator=":: ">
                        <WhatsappIcon size={24} round />
                    </WhatsappShareButton>
                    <LinkedinShareButton
                        url={pglink}
                        source="Decode"
                        summary={`Do the Project: ${title} on Decode.`}
                    >
                        <LinkedinIcon size={24} round />
                    </LinkedinShareButton>
                    <PinterestShareButton url={String(window.location)}>
                        <PinterestIcon size={24} round />
                    </PinterestShareButton>
                    <EmailShareButton
                        url={pglink}
                        subject={title}
                    body={`Do the Project: ${title} on Decode.`}
                    >
                        <EmailIcon size={24} round />
                    </EmailShareButton>
                </div>
            </section>
    );
};
Share.propTypes = {
    title: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
};
export default Share;
