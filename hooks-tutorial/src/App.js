import React, { useState, useEffect } from 'react';

const Counter = () => {
  const [value, setValue] = useState(0);
  const [form, setForm] = useState({
    name: '',
    nickname: '',
  });

  const handlerChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
/*
  useEffect (() => {
    console.log('렌더링 완료');
    console.log(form);
    setValue(value + 1);
  }
  )
*/

/*
  useEffect (() => {
    console.log('렌더링 완료');
    console.log(form);
    setValue(10);
  }, [] 
  //useState 항목중에서 []안의 변경이 일어나면 호출 []값이없으면 mount 최초의 한번만 호출
  // 비동기 통신으로 서버에서 자료를 얻어 화면에 출력하기 위해 state 값을 변경한다
  // 비동기로 JSON 데이터를 호출하는 시기와 같다(=window.onload)
  );
*/

/*
useEffect (() => {
  console.log('렌더링 완료');
  console.log(form);
  setValue(10);
}, [form]
);
*/

useEffect (() => {
  console.log('렌더링 완료');
  console.log(form);
  setValue(10);

  return () => {
    console.log('cleanup...', form);
  };
}, [form]);

  return (
    <div>
      <p>
        이름 : <input name="name" value={form.name} onChange={handlerChange} />
        <br />
        별명 :{' '}
        <input name="nickname" value={form.nickname} onChange={handlerChange} />
        <br />
      </p>
      <p>
        현재 카운트 값은 <b>{value} </b>입니다
      </p>
      <button onClick={() => setValue(value + 1)}>1 증가</button>
      <button onClick={() => setValue(value - 1)}>1 감소</button>
    </div>
  );
};
/*
Counter(); 1 증가 클릭 -> value(0 -> 1) Counter(); 호출 
Counter();
*/
export default Counter;
