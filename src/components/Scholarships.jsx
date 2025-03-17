"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaGraduationCap, FaMoneyBillWave, FaRunning, FaGlobe, FaLaptopCode } from "react-icons/fa";

const scholarshipData = [
  {
    category: "Merit-Based Scholarships",
    icon: <FaGraduationCap className="text-5xl text-blue-600" />,
    description: "For students with outstanding academic achievements.",
    scholarships: [
      { name: "XYZ Excellence Scholarship", eligibility: "GPA 3.5+", deadline: "Aug 31, 2024", link: "#" },
      { name: "ABC Talent Scholarship", eligibility: "Top 5% of class", deadline: "Jul 15, 2024", link: "#" }
    ],
  },
  {
    category: "Need-Based Scholarships",
    icon: <FaMoneyBillWave className="text-5xl text-green-600" />,
    description: "For students facing financial difficulties.",
    scholarships: [
      { name: "National Student Support", eligibility: "Low-income students", deadline: "Sep 10, 2024", link: "#" },
      { name: "Global Education Fund", eligibility: "Financially disadvantaged", deadline: "Oct 5, 2024", link: "#" }
    ],
  },
  {
    category: "Sports Scholarships",
    icon: <FaRunning className="text-5xl text-yellow-500" />,
    description: "For talented athletes in different sports.",
    scholarships: [
      { name: "Elite Athlete Grant", eligibility: "National-level sports", deadline: "Aug 20, 2024", link: "#" },
      { name: "Sports Excellence Fund", eligibility: "Strong sports background", deadline: "Sep 12, 2024", link: "#" }
    ],
  },
  {
    category: "Field-Specific Scholarships",
    icon: <FaLaptopCode className="text-5xl text-purple-600" />,
    description: "Scholarships for students in specific fields.",
    scholarships: [
      { name: "Tech Innovators", eligibility: "Engineering & Tech", deadline: "Oct 1, 2024", link: "#" },
      { name: "Future Doctors Fund", eligibility: "Medical & Healthcare", deadline: "Nov 15, 2024", link: "#" }
    ],
  },
  {
    category: "International Scholarships",
    icon: <FaGlobe className="text-5xl text-indigo-600" />,
    description: "For students looking to study abroad.",
    scholarships: [
      { name: "Global Leaders", eligibility: "International students", deadline: "Oct 30, 2024", link: "#" },
      { name: "Study Abroad Aid", eligibility: "Foreign university admission", deadline: "Nov 25, 2024", link: "#" }
    ],
  },
];

const ScholarshipCard = ({ category, icon, description, scholarships }) => {
  return (
    <motion.div
      className="bg-white/90 backdrop-blur-lg rounded-2xl p-6 shadow-md border border-gray-200 hover:shadow-2xl transition-all max-w-3xl mx-auto"
      whileHover={{ scale: 1.05 }}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
    >
      <div className="flex items-center space-x-4 mb-4">{icon}<h2 className="text-2xl font-bold text-gray-900">{category}</h2></div>
      <p className="text-gray-600">{description}</p>
      <ul className="mt-4 space-y-4">
        {scholarships.map((item, index) => (
          <motion.li
            key={index}
            className="flex flex-col md:flex-row md:items-center justify-between bg-gray-100 p-4 rounded-lg border border-gray-300"
            whileHover={{ x: 10 }}
            transition={{ duration: 0.3 }}
          >
            <div>
              <span className="font-semibold text-gray-800">{item.name}</span>
              <p className="text-sm text-gray-600">{item.eligibility}</p>
            </div>
            <div className="flex items-center space-x-3 mt-2 md:mt-0">
              <span className="text-red-500 text-sm font-semibold">{item.deadline}</span>
              <motion.a
                href={item.link}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
                whileHover={{ scale: 1.1 }}
              >
                Apply Now
              </motion.a>
            </div>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
};

const Scholarships = () => {
  return (
    <motion.div
      id="scholarship"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="min-h-screen bg-gray-100 py-20 px-6"
    >
      <div className="text-center">
        <motion.h1
          className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          🎓 Scholarship Opportunities
        </motion.h1>
        <motion.p
          className="text-lg text-gray-700 max-w-2xl mx-auto"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          Explore a variety of scholarships available for students based on merit, need, and specific fields of study.
        </motion.p>
      </div>
      <motion.div
        className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        {scholarshipData.map((section, index) => (
          <ScholarshipCard key={index} {...section} />
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Scholarships;
