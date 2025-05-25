import React, { useState } from 'react';

function OnlineForm() {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [instrument, setInstrument] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [service, setService] = useState('gmail'); // 기본값으로 Gmail 선택

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch('http://localhost:5001/api/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, age, instrument, email, message, service }),
            });

            if (response.ok) {
                alert('접수가 완료되었습니다.');
                // 폼 초기화
                setName('');
                setAge('');
                setInstrument('');
                setEmail('');
                setMessage('');
            } else {
                const errorData = await response.text();
                console.error('이메일 전송 실패:', errorData);
                alert('접수 실패. 다시 시도해주세요.');
            }
        } catch (error) {
            console.error('네트워크 오류:', error);
            alert('네트워크 오류가 발생했습니다.');
        }
    };

    const handleServiceChange = (event) => {
        setService(event.target.value);
    };

    return (
        <div>
            <h2>온라인 접수</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">이름:</label>
                    <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required />
                </div>
                <div>
                    <label htmlFor="age">나이:</label>
                    <input type="number" id="age" value={age} onChange={(e) => setAge(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="instrument">악기/분야:</label>
                    <input type="text" id="instrument" value={instrument} onChange={(e) => setInstrument(e.target.value)} required />
                </div>
                <div>
                    <label htmlFor="email">이메일:</label>
                    <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <div>
                    <label htmlFor="message">기타 요청사항:</label>
                    <textarea id="message" value={message} onChange={(e) => setMessage(e.target.value)} />
                </div>
                <div>
                    <label>이메일 서비스 선택:</label>
                    <div>
                        <input
                            type="radio"
                            id="gmail"
                            value="gmail"
                            checked={service === 'gmail'}
                            onChange={handleServiceChange}
                        />
                        <label htmlFor="gmail">Gmail</label>
                    </div>
                    <div>
                        <input
                            type="radio"
                            id="naver"
                            value="naver"
                            checked={service === 'naver'}
                            onChange={handleServiceChange}
                        />
                        <label htmlFor="naver">Naver</label>
                    </div>
                </div>
                <button type="submit">접수하기</button>
            </form>
        </div>
    );
}

export default OnlineForm;