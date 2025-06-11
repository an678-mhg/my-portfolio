"use client";

import { motion } from "framer-motion";
import { Briefcase, Star, Calendar, MapPin } from "lucide-react";
import portfolioData from "../../data/portfolio.json";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

export function ExperienceSection() {
  const { experience, sections } = portfolioData;

  return (
    <motion.section
      id="experience"
      className="py-20 px-6 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div className="text-center mb-16">
          <motion.h2
            className="text-3xl lg:text-5xl font-bold mb-6"
            {...fadeInUp}
          >
            <span className="bg-gradient-to-r from-green-600 via-teal-600 to-blue-600 bg-clip-text text-transparent">
              {sections.experience.title}
            </span>
          </motion.h2>
          <motion.p
            className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {sections.experience.subtitle}
          </motion.p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-12">
            {experience.map((exp, index) => (
              <motion.div
                key={exp.company}
                className="relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                {/* Timeline line */}
                {index !== experience.length - 1 && (
                  <div className="absolute left-6 top-20 w-0.5 h-32 bg-gradient-to-b from-blue-500 to-purple-500 opacity-30"></div>
                )}

                <div className="flex items-start">
                  {/* Timeline dot */}
                  <motion.div
                    className={`w-12 h-12 bg-gradient-to-r ${exp.gradient} rounded-full flex items-center justify-center mr-6 mt-2 flex-shrink-0 shadow-lg`}
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  >
                    <Briefcase className="text-white" size={20} />
                  </motion.div>

                  {/* Content */}
                  <motion.div
                    className="group bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm p-8 rounded-2xl border border-white/20 dark:border-gray-700/50 flex-1 hover:shadow-2xl transition-all duration-300"
                    whileHover={{ y: -5 }}
                  >
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                          {exp.position}
                        </h3>
                        <p
                          className={`bg-gradient-to-r ${exp.gradient} bg-clip-text text-transparent font-semibold text-lg mb-2`}
                        >
                          {exp.company}
                        </p>
                      </div>
                      <div className="flex flex-col lg:text-right">
                        <div className="flex items-center text-gray-500 dark:text-gray-400 mb-1">
                          <Calendar size={16} className="mr-1" />
                          <span className="text-sm">{exp.period}</span>
                        </div>
                        <div className="flex items-center text-gray-500 dark:text-gray-400">
                          <MapPin size={16} className="mr-1" />
                          <span className="text-sm">{exp.location}</span>
                        </div>
                      </div>
                    </div>

                    <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                      {exp.description}
                    </p>

                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-4">
                        Thành tựu đạt được:
                      </h4>
                      <div className="grid md:grid-cols-2 gap-3">
                        {exp.achievements.map((achievement, idx) => (
                          <motion.div
                            key={idx}
                            className="group/achievement bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300"
                            whileHover={{ scale: 1.02 }}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                          >
                            <div className="flex items-start">
                              <Star
                                className={`text-yellow-500 mt-1 mr-3 flex-shrink-0 group-hover/achievement:text-yellow-400`}
                                size={16}
                              />
                              <span className="text-gray-600 dark:text-gray-300 text-sm">
                                {achievement}
                              </span>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
