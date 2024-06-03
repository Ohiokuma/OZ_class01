import React from 'react';
import './JobList.css';

const jobs = [
    // 예시 데이터, 실제 데이터는 원하는 만큼 추가하세요
    { title: "더덕마켓 고객센터 단기계약직 모집(1달 계약직)", location: "대전광역시 대덕구 4동", salary: "월급 3,000,000" },
    { title: "더덕마켓 배송센터 단기계약직 모집", location: "서울특별시 강남구 3동", salary: "월급 2,800,000" },
    // ... 8개 이상의 항목 추가
];

const JobList = () => {
    return (
        <div className="job-list">
            <h2>인기 더덕알바</h2>
            <div className="jobs">
                {jobs.map((job, index) => (
                    <div className="job-item" key={index}>
                        <h3>{job.title}</h3>
                        <p>{job.location}</p>
                        <p>{job.salary}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default JobList;
