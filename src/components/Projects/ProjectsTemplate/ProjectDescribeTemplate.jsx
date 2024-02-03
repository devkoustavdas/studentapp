import PropTypes from 'prop-types';
import React, { lazy, Suspense } from "react";
import Share from "../../PageAccessories/Share";
import Popup from "../../PageAccessories/Popup";

const ProjectDescribeTemplate = ({ title, date, tags, standard, link, describe, steps }) => {
  return (
<div>
          <section className="bg-slate-800 rounded-lg px-5 py-3 pb-14">
              <div className="bg-purple-600 text-slate-200 rounded-lg px-4 py-1 text-sm float-right w-52 text-center">
                  {standard}
              </div>

              <time dateTime="2022-10-10" className="block text-xs text-gray-400 mt-4">
                  {date}
              </time>
              <h3 className="font-title text-xl font-bold text-slate-300 mx-4 md:mx-6 mt-6">{title}</h3>
              <p className='text-justify mx-4 md:mx-6 mb-6 text-slate-400'>{describe}</p>
              <div className='text-gray-300 ml-1'>Skills you'll be learning</div>
              <div className="mt-1 flex flex-wrap gap-1">
                  {tags.map((tagItem, index) => (
                      <span key={index} className="text-xs text-slate-400 bg-slate-700 px-4 py-1 mx-1 rounded-xl">
                          {tagItem}
                      </span>
                  ))}
              </div>

              <div className="float-right">
                  <Share title={`Do the Project: ${title} on Decode.`} link={`projects/${link}`} />
              </div>
          </section>
          <section className="bg-slate-800 rounded-lg px-5 py-3 pb-14 mt-5">
              <div className='text-gray-300 ml-1'>Instructions</div>
              <div className="container mx-auto">
                  <div className="grid gap-6 my-5 xl:grid-cols-3 lg:grid-cols-2">
                      {steps.map((stepItem, i) => (
                        <div key={i} className="flex flex-col p-8 space-y-4 rounded-md bg-slate-700">
                              <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 font-bold rounded-full bg-violet-400 ">{i+1}</div>
                          <p className="text-slate-400">
                              {stepItem}
                          </p>
                      </div>
                      ))}
                  </div>
              </div>
          </section>
          <section className="bg-slate-800 rounded-lg px-5 py-3 pb-5 mt-5">
              <div className='text-gray-300 ml-1 mb-2'>Submit your Project Link</div>
              <div className='flex flex-col md:flex-row gap-3'>
                  <input placeholder='Type the link to your project' className='md:w-10/12' type="url" id="project_url" />
                  <button type="submit" className='block px-8 py-2 bg-indigo-600 text-gray-100 rounded-md'>Submit</button>
              </div>
          </section>
</div>
  )
}
ProjectDescribeTemplate.propTypes = {
    title: PropTypes.string.isRequired,
    describe: PropTypes.string.isRequired,
    standard: PropTypes.string,
    date: PropTypes.string,
    link: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string),
    steps: PropTypes.arrayOf(PropTypes.string),
};
export default ProjectDescribeTemplate;
