import PropTypes from 'prop-types';

const Meta = ({ title, description, keyword, link }) => {
    return (
        <head>
            <link rel="canonical" href={`https://team-zero-gdsc-submission.vercel.com/${link}`} />
            <meta name="description" content={description} />
            <meta name="author" content="Team Decode" />
            <meta name="keywords" content={keyword} />
            <title>{title}</title>
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta
                property="og:url"
                content={`https://team-zero-gdsc-submission.vercel.com/${link}`}
            />
        </head>
    );
};
Meta.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    link: PropTypes.string.isRequired,
    keyword: PropTypes.string,
};
export default Meta;
