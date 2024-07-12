import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';// eslint-disable-line no-unused-vars
import { cartCart, cartDelet, cartName, addlineUp, cartBlank, cartReset, newlineUp, updatedlinUP } from './../store';
import { useParams, useNavigate } from 'react-router-dom';// eslint-disable-line no-unused-vars
import { Button, Nav, Card, ListGroup, Form } from 'react-bootstrap'
import styled from 'styled-components'

let TayptabColor = styled.div`
background : ${$props => $props.$bg}
`;



function Edit() {

    let { id } = useParams();
    let lineUP = useSelector((state) => state.lineUP)
    let poketType = useSelector((state) => state.poketType)
    var poketMon = useSelector((state) => state.poketMon)
    let lineNum = useSelector((state) => state.lineNum)
    let cart = useSelector((state) => state.cart)
    let dispatch = useDispatch();
    let navigate = useNavigate()

    let [modall, modallSet] = useState(0);
    let [test, testSet] = useState(false);
    let [tabNum, tabNumSet] = useState(-1);  // Tab 액티브 확인용
    let [trainerName, trainerNameSet] = useState('');
    let [blackcard, blackcardSet] = useState(poketMon); // 타입분류

    useEffect(() => {  // 출발하기 누르면 되는 리셋 및 페이지 이동
        if (test) {
            let num = lineUP.find((a) => { return a.no === Number(id) })
            if (num === undefined) {
                dispatch(addlineUp({ no: lineNum.num, name: cart.name, monster: cart.monster }))
                dispatch(newlineUp());
                navigate('/'); dispatch(cartReset()); testSet(false);
            } else {
                dispatch(updatedlinUP({ no: Number(id), name: cart.name, monster: cart.monster }))
                navigate('/'); dispatch(cartReset()); testSet(false);
            }
        }
    }, [test])
    useEffect(() => {    // 컴포넌트 로드시 파라미터 번호랑 일치하는 데이터 값 불러오기
        let preNo = lineUP.find((a) => { return a.no === Number(id) })
        if (preNo !== undefined) {
            dispatch(cartBlank(preNo))
        }
    }, [])
    useEffect(() => { // tab 넘버에 따른 타입 및 이름검색
        if (tabNum !== -1) {
            let t = poketType[tabNum].name;
            let p1 = poketMon.filter((a) => { return a.type[0] == t || a.type[1] == t })
            let copy = [...blackcard]
            copy = p1;
            blackcardSet(copy)
        }
    }, [tabNum])

    return (<>
        {/* TypeTab 설정 시작*/}
        <div className='navWrap'>
            {modall === 0 ? <>
                <Nav variant="tabs" defaultActiveKey="/home" className='nav'>
                    {poketType.map((a, i) => {
                        return <Nav.Item className='tab' key={i}><TayptabColor $bg={poketType[i].color}><Nav.Link className='typeTab' key={i} onClick={(e) => {
                            tabNumSet(i);
                        }}>{a.name}</Nav.Link></TayptabColor></Nav.Item>
                    })
                    }
                </Nav></> : null}
        </div > {/* TypeTab 설정 끝*/}

        {/*Card 설정 시작*/}
        <div className='cardWrap'>
            {modall === 0 ? <>
                {blackcard.map((a, i) => {
                    return (
                        <PoketMonCard key={i} poketMon={blackcard[i]}></PoketMonCard>
                    )
                })
                } </> :
                <div className='modal_'>
                    <Modal cart={cart}></Modal>
                    <div className='modalinput'>
                        <input type='text' placeholder={cart.name} className='inputName' onChange={(e) => {
                            trainerNameSet(e.target.value)
                        }}></input>
                        <Button variant="success" className='modalbut' onClick={() => {
                            if (trainerName.length < 4) {
                                alert('4글자 이상의 이름을 적어주세요 (한글,영어,숫자,특수문자 가능)')
                            } else {
                                dispatch(cartName(trainerName))
                                testSet(true);
                            }
                        }}>출발하기</Button>{' '}
                        <Button variant="danger" className='modalbut' onClick={() => {
                            modallSet(0);
                        }}>다시 고르기</Button>{' '}
                    </div>
                </div>
            }
        </div>
        {/*Card 설정 끌*/}
        {/*Selected 설정 시작*/}
        {
            modall === 0 ? <>
                <div className='selectedWrap'>
                    <div className='selected_1'> {/* 선택완료 포켓몬 확인 */}

                        { /* 선택 포켓몬 있을 시 장바구니 상태 */
                            cart.monster.length > 0 ?
                                <>
                                    {
                                        cart.monster.map((a, i) => {
                                            const pokeImg = `${process.env.PUBLIC_URL}/image/poketmon/poket${a.no}.png`
                                            return <div key={i} style={{ backgroundImage: `url(${pokeImg})` }}><button className='cartbut' onClick={() => {
                                                // 장바구니에서 고른 포켓몬 삭제 하기 
                                                dispatch(cartDelet(i));

                                            }}></button></div>
                                        })
                                    }
                                </>
                                : <span>최대 6마리의 포켓몬을 골라주세요</span>
                        }
                    </div>
                    <div className='selected_2'>
                        <Button variant="warning" onClick={() => {
                            if (cart.monster.length < 1) {
                                alert('한 마리의 포켓몬도 없이 여행을 떠나는 건 위험합니다. 최소한 한 마리의 포켓몬을 골라주세요')
                            } else {
                                modallSet(modall + 1)
                            }
                        }}>등록하기</Button>{' '}
                    </div>
                </div></> : null
        }
        {/*Selected 설정 끝*/}
    </>)
}


function PoketMonCard(props) { /* edit 포켓몬 선택 카드들  */

    let dispatch = useDispatch();
    const pokeImg = `${process.env.PUBLIC_URL}/image/poketmon/poket${props.poketMon.no}.png`
    return (
        <>
            <Card style={{ width: '12rem' }} className='card'>
                <div className='pic' style={{ backgroundImage: `url(${pokeImg})` }} ></div>
                <Card.Body>
                    <Card.Title>{props.poketMon.name}</Card.Title>
                    <Card.Text>
                        No.{props.poketMon.no}
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    {props.poketMon.type.map((a, i) => {
                        return (
                            <ListGroup.Item key={i}>{a} 타입</ListGroup.Item>
                        )
                    })}
                </ListGroup>
                <Card.Body>
                    <Button onClick={() => {
                        dispatch(cartCart(props.poketMon))
                    }}>데 려 가 기 </Button>
                </Card.Body>
            </Card>
        </>
    )
}
function Modal(props) {
    return (
        <>
            <div className='modalcard'>
                {props.cart.monster.map((a, i) => {
                    const pokeImg = `${process.env.PUBLIC_URL}/image/poketmon/poket${a.no}.png`
                    return (
                        <Card style={{ width: '14rem' }} className='card' key={i}>
                            <div className='pic' style={{ backgroundImage: `url(${pokeImg})` }} ></div>
                            <Card.Body>
                                <Card.Title>{a.name}</Card.Title>
                                <Card.Text>
                                    No. {a.no}
                                </Card.Text>
                            </Card.Body>
                            <ListGroup className="list-group-flush">
                                {a.type.map((a, i) => {
                                    return (
                                        <ListGroup.Item key={i}>{a}</ListGroup.Item>
                                    )
                                })}

                            </ListGroup>
                        </Card>
                    )
                })}
            </div>
        </>
    )
}





export default Edit;


