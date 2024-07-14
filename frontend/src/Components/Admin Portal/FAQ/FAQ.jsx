import React, { useState } from 'react';
import './FAQ.css'; 

const ToggleFAQ = () => {
    const faqsData = [
        {
            question: 'What is Lorem Ipsum?',
            answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam at feugiat est, ac gravida magna.'
        },
        {
            question: 'Why do we use it?',
            answer: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.'
        },
        {
            question: 'Where does it come from?',
            answer: 'Sed dapibus diam vel augue consequat, vel dapibus metus pharetra. Nam maximus metus nisi, at eleifend nibh dapibus et.'
        },
        {
            question: 'What is the first step?',
            answer: 'Nulla facilisi. Sed et ultrices diam. Fusce vehicula rutrum luctus. Integer a quam a turpis dapibus iaculis.'
        },
        {
            question: 'How do I get started?',
            answer: 'In vehicula lacus a magna consectetur fermentum. Mauris tempor mi sed lacus efficitur dictum.'
        },
        {
            question: 'Why do we use it?',
            answer: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.'
        },
        {
            question: 'Where does it come from?',
            answer: 'Sed dapibus diam vel augue consequat, vel dapibus metus pharetra. Nam maximus metus nisi, at eleifend nibh dapibus et.'
        }
    ];

    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFAQ = (index) => {
        setActiveIndex(prevIndex => (prevIndex === index ? null : index));
    };

    return (
        <div className="toggle-faq">
            <h2 className="faq-title">Operator Assistance</h2>
            <div className="faq-list">
                {faqsData.map((faq, index) => (
                    <div key={index} className={`faq-item ${activeIndex === index ? 'open' : ''}`}>
                        <div className="question" onClick={() => toggleFAQ(index)}>
                            <h3>{faq.question}</h3>
                            <svg className={`arrow-icon ${activeIndex === index ? 'open' : ''}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 17.5l-7-7.5h14l-7 7.5z"/></svg>
                        </div>
                        <div className={`answer ${activeIndex === index ? 'open' : ''}`}>
                            <p>{faq.answer}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ToggleFAQ;
