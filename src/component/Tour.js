import React, { useState } from 'react';
import { SERVER_URL } from '../constants';

function Tour(props) {
    const [tourdate, setCdate] = useState({
        cdate:"",
        id:""
    });
    const [tours, setTours] = useState([]);
    const onChange = (e) => {
        setCdate({
            ...tourdate,
            [e.target.name] :  e.target.value
        });
    }
    const getTour = () => {
        fetch(`${SERVER_URL}tour/wea?CurrentDate=${tourdate.cdate}&CourseId=${tourdate.id}`)
        .then(response => response.json())
        .then(data => {
            console.log(data.response.body.items.item);
            setTours(data.response.body.items.item);
        })
        .catch(e => console.log(e));
    }
    return (
        <div>
            여행지 조회 : 
            날짜
            <input name="cdate" value={tourdate.cdate} onChange={onChange} />
            <select name="id" value={tourdate.id} onChange={onChange}>
                <option value='1'>남호고택에서의 하룻밤</option>
                <option value='2'>고찰에서 캠핑을 하다</option>
                <option value='3'>밝고 청정한 영양의 산천</option>
                <option value='4'>세월의 아름다움을 찾아서</option>
                <option value='5'>속리산이 그려낸 즐거운 나날</option>
                <option value='6'>청주의 자연에서 배우면서 뒹굴자</option>
                <option value='7'>캠핑을 즐기며 여유롭게 돌아보는 태안</option>
                <option value='8'>캠핌에 문화와 예술을 더하다</option>
                <option value='9'>백제땅에 캠핑하다</option>
                <option value='10'>서해바다 안기고 체험마을에 머물다</option>
            </select>
            <button onClick={getTour}>조회</button>
            <div>
                <ul>
                    {tours.map((t, index) => <li key={index}>{t.tm} {t.thema} : {t.courseName} {t.spotName}</li>)}
                </ul>
            </div>
        </div>
    );
}

export default Tour;