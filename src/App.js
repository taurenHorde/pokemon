import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { useSelector, useDispatch } from 'react-redux';// eslint-disable-line no-unused-vars
import { cartBlank, removelineUp } from './store';
import { Route, Routes, useNavigate } from 'react-router-dom';// eslint-disable-line no-unused-vars
import { Table, Button } from 'react-bootstrap'

import Edit from './component/Edit';


function App() {

  let lineUP = useSelector((state) => state.lineUP)
  let navigate = useNavigate()

  return (
    <div className="App">
      <Routes>
        <Route path="/edit/:id" element={<Edit>
        </Edit>}></Route>
        <Route path="/" element={<>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Pokémon1.</th>
                <th>Pokémon2.</th>
                <th>Pokémon3.</th>
                <th>Pokémon4.</th>
                <th>Pokémon5.</th>
                <th>Pokémon6.</th>
                <th>Pokémon Trainer</th>
                <th>Edit</th>
              </tr>
            </thead>
            <tbody>
              {
                lineUP.map((a, i) => {
                  return (
                    <ListTR key={i} lineUP={a}></ListTR>
                  )
                })
              }
              <tr>
                <th>#</th>
                <th colSpan={6}> 1세대 포켓몬으로 다양한 라인업을 만들어 보세요.</th>
                <th colSpan={2}><Button variant="success" onClick={() => {
                  navigate(`/edit/new`)
                }}>새로 생성</Button>{' '}</th>
              </tr>
            </tbody>
          </Table>
        </>} ></Route>
      </Routes>
    </div>
  );
}



function ListTR(props) { /* list 2행부터 th 컴포넌트 */
  let dispatch = useDispatch();
  let navigate = useNavigate();
  return (
    <>
      <tr>
        <td>{props.lineUP.no}</td>

        {[0, 1, 2, 3, 4, 5].map((a, i) => {
          const pokeImg = `${process.env.PUBLIC_URL}/image/poketmon/poket${props.lineUP.monster[a]?.no}.png`
          return (
            <td key={a}>
              {props.lineUP.monster[a] !== undefined ? <>
                {/* {props.lineUP.monster[a].name}<div className='pic' style={{ backgroundImage: `url(/image/poketmon/poket` + props.lineUP.monster[a].no + `.png)` }} ></div> */}
                {props.lineUP.monster[a].name}<div className='pic' style={{ backgroundImage: `url(${pokeImg})` }} ></div>
              </> : null}
            </td>
          )
        })}
        <td>{props.lineUP.name}</td>
        <td className='listedit'> {/* 나중에 css 수정해야함  */}
          <Button variant="warning" onClick={() => {
            navigate(`/edit/` + props.lineUP.no);
            cartBlank(props.lineUP)
          }}>수정하기</Button>{' '}
          <Button variant="danger" onClick={() => {
            dispatch(removelineUp(props.lineUP.no))
          }}>삭제하기</Button>{' '}
        </td>
      </tr>
    </>
  )
}





export default App;
