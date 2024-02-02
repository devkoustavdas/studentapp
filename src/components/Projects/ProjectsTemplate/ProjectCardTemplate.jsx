import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import React, { lazy, Suspense } from "react";
import Share from "../../PageAccessories/Share";

const ProjectCardTemplate = ({ title, link, date, tags, standard }) => {
    const pg = `/projects/${link}`;
    return (
        <React.Suspense fallback={<div>Project Loading...</div>}>
            <Link to={pg} className="no-underline">
                <article className="hover:animate-background rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s] dark:shadow-gray-700/25 my-8">
                    <div className="rounded-[10px] bg-slate-900 p-4 sm:p-6">
                        <div className="bg-purple-600 text-slate-200 rounded-lg px-4 py-1 text-sm float-right w-52 text-center">
                            {standard}
                        </div>

                        <time dateTime="2022-10-10" className="block text-xs text-gray-400 mt-4">
                            {date}
                        </time>

                        <h3 className="mt-0.5 text-lg font-medium text-slate-200">
                            {title}
                        </h3>

                        <div className="mt-4 flex flex-wrap gap-1">
                            {tags.map((tagItem, index) => (
                                <span key={index} className="text-xs text-slate-400 bg-slate-700 px-4 py-1 mx-1 rounded-xl">
                                    {tagItem}
                                </span>
                            ))}
                        </div>

                        <Share title={`Do the Project: ${title} on Decode.`} link={`projects/${link}`} />
                       
                    </div>
                </article>
            </Link>
        </React.Suspense >
    )
}
ProjectCardTemplate.propTypes = {
    title: PropTypes.string.isRequired,
    standard: PropTypes.string,
    date: PropTypes.string,
    link: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string),
};
export default ProjectCardTemplate;
