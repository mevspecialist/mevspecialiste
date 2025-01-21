// import { PageBanner } from '@/components/PageBanner';
// import { getJobs } from '../api/career/route';
// import { FaDollarSign, FaClock } from 'react-icons/fa';
// import { FaLocationPin } from 'react-icons/fa6';
// import { BlocksRenderer } from '@strapi/blocks-react-renderer';

// interface Jobs {
//     id: string;
//     title: string;
//     location: string;
//     createdAt: string;
//     salary: string;
//     type: string;
//     // summary: RootNode[];
//     // description: RootNode[];
// }

// const Career: React.FC = async () => {
//     const jobs = await getJobs();

//     if (!jobs || jobs.length === 0) {
//         return <p>No job openings at the moment. Check back later!</p>;
//     }

//     return (
//         <main className="px-10 md:px-32">
//             <PageBanner
//                 title="Career"
//                 content="Build a fulfilling career with us! Explore opportunities to grow, innovate, and make a difference in the healthcare industry. Join our mission to provide exceptional care."
//                 image="/images/career/career-banner.jpeg"
//             />
//             <section className="py-20">
//                 <h2 className="text-2xl font-bold mb-4">Career Opportunities</h2>

//                 <div>
//                     {jobs.map((job, index: number) => (
//                         <div key={index} className="lg:flex gap-12 mb-10">
//                             <div className="w-max h-max rounded-lg bg-[#EFF5F0] px-6 py-2">
//                                 <ul className="flex items-baseline gap-4 py-2 pr-20 border-b-[1px] border-[#FDFDFD]">
//                                     <li className="order-2 flex flex-col font-semibold text-pry-text-color-1">
//                                         <span>Location</span>
//                                         <span className="font-light">{job.location}</span>
//                                     </li>
//                                     <li className="order-1 w-8 h-8 text-sm flex justify-center items-center rounded-full bg-btn-color text-white">
//                                         <FaLocationPin />
//                                     </li>
//                                 </ul>
//                                 <ul className="flex items-baseline gap-4 py-2 pr-20 border-b-[1px] border-[#FDFDFD]">
//                                     <li className="order-2 flex flex-col font-semibold text-pry-text-color-1">
//                                         <span>Type</span>
//                                         <span className="font-light">{job.type}</span>
//                                     </li>
//                                     <li className="order-1 w-8 h-8 text-sm flex justify-center items-center rounded-full bg-btn-color text-white">
//                                         <FaClock />
//                                     </li>
//                                 </ul>
//                                 <ul className="flex items-baseline gap-4 py-2 pr-20">
//                                     <li className="order-2 flex flex-col font-semibold text-pry-text-color-1">
//                                         <span>Salary</span>
//                                         <span className="font-light">{job.salary}</span>
//                                     </li>
//                                     <li className="order-1 w-8 h-8 text-sm flex justify-center items-center rounded-full bg-btn-color text-white">
//                                         <FaDollarSign />
//                                     </li>
//                                 </ul>
//                             </div>
//                             <div key={job.id} className="p-4 mb-4 rounded">
//                                 <h3 className="text-xl font-semibold">{job.title}</h3>
//                                 <BlocksRenderer content={job.summary} />
//                                 <BlocksRenderer content={job.description} />
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </section>
//         </main>
//     );
// };

// export default Career;
