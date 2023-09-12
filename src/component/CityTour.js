import React, { useState } from 'react';
import { SERVER_URL } from '../constants';

function Tour(props) {
    const [citydate, setCdate] = useState({
        cdate:"",
        cday:"",
        id:""
    });
    const [citys, setCitys] = useState([]);
    const onChange = (e) => {
        setCdate({
            ...citydate,
            [e.target.name] :  e.target.value
        });
    }
    const getCity = () => {
        fetch(`${SERVER_URL}tour/city?currentDate=${citydate.cdate}&day=${citydate.cday}&cityAreaId=${citydate.id}`)
        .then(response => response.json())
        .then(data => {
            console.log(data.response.body.items.item);
            setCitys(data.response.body.items.item);
        })
        .catch(e => console.log(e));
    }
    return (
        <div>
            날짜 : 
            <input name="cdate" value={citydate.cdate} onChange={onChange} />
            기간:
            <input name="cday" value={citydate.cday} onChange={onChange} />
            시군구 : 
            <select name="id" value={citydate.id} onChange={onChange}>
                <option value='-'>시군구를 선택하세요.</option>
                <option value='1147000000'>서울 양천구</option>
                <option value='4282000000'>강원 고성군</option>
                <option value='3114000000'>울산 남구</option>
            </select>
            <button onClick={getCity}>조회</button>
            <div>
                <ul>
                    {citys.map((t, index) => <li key={index}>
                        날짜: {t.tm} / 지역: {t.doName} / 도시: {t.cityName} / 기후지수: {t.TmaTci} / 상태: {t.TCI_GRADE}</li>)}
                </ul>
            </div>
        </div>
    );
}

export default Tour;