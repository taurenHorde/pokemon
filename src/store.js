import { configureStore, createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";


let poketType = createSlice({ //포켓몬 typeDB - 서버대용
    name: 'poketType',
    initialState: [
        { name: '노말', color: '#ADA594', id: 0 },
        { name: '불꽃', color: '#e25304', id: 1 },
        { name: '물', color: '#0267C2', id: 2 },
        { name: '풀', color: '#389A02', id: 3 },
        { name: '전기', color: '#EDA900', id: 4 },
        { name: '얼음', color: '#6dd3f5', id: 5 },
        { name: '격투', color: '#C03028', id: 6 },
        { name: '독', color: '#6B246E', id: 7 },
        { name: '땅', color: '#d97746', id: 8 },
        { name: '비행', color: '#5D73D4', id: 9 },
        { name: '에스퍼', color: '#DC3165', id: 10 },
        { name: '벌레', color: '#888C0E', id: 11 },
        { name: '바위', color: '#9E863D', id: 12 },
        { name: '고스트', color: '#695582', id: 13 },
        { name: '드래곤', color: '#4E3BA4', id: 14 },
        { name: '악', color: '#3C2D23', id: 15 },
        { name: '강철', color: '#8E8E9F', id: 16 },
        { name: '페어리', color: '#E08EE0', id: 17 }
    ]
})
let poketMon = createSlice({ // 포켓몬 DB - 서버대용
    name: 'poketMon',
    initialState: [
        { no: 1, name: '이상해씨', type: ['풀', '독'] },
        { no: 2, name: '이상해풀', type: ['풀', '독'] },
        { no: 3, name: '이상해꽃', type: ['풀', '독'] },
        { no: 4, name: '파이리', type: ['불꽃'] },
        { no: 5, name: '리자드', type: ['불꽃'] },
        { no: 6, name: '리자몽', type: ['불꽃', '비행'] },
        { no: 7, name: '꼬부기', type: ['물'] },
        { no: 8, name: '어니부기', type: ['물'] },
        { no: 9, name: '거북왕', type: ['물'] },
        { no: 10, name: '캐터피', type: ['벌레'] },

        { no: 11, name: '단데기', type: ['벌레'] },
        { no: 12, name: '버터플', type: ['벌레', '비행'] },
        { no: 13, name: '뿔충이', type: ['벌레', '독'] },
        { no: 14, name: '딱충이', type: ['벌레', '독'] },
        { no: 15, name: '독침붕', type: ['벌레', '독'] },
        { no: 16, name: '구구', type: ['노말', '비행'] },
        { no: 17, name: '피죤', type: ['노말', '비행'] },
        { no: 18, name: '피죤투', type: ['노말', '비행'] },
        { no: 19, name: '꼬렛', type: ['노말'] },
        { no: 20, name: '레트라', type: ['노말'] },

        { no: 21, name: '깨비참', type: ['노말', '비행'] },
        { no: 22, name: '깨비드릴조', type: ['노말', '비행'] },
        { no: 23, name: '아보', type: ['독'] },
        { no: 24, name: '아보크', type: ['독'] },
        { no: 25, name: '피카츄', type: ['전기'] },
        { no: 26, name: '라이츄', type: ['전기'] },
        { no: 27, name: '모래두지', type: ['땅'] },
        { no: 28, name: '고지', type: ['땅'] },
        { no: 29, name: '니드런(여)', type: ['독'] },
        { no: 30, name: '니드리나', type: ['독'] },

        { no: 31, name: '니드퀸', type: ['독', '땅'] },
        { no: 32, name: '니드런(남)', type: ['독'] },
        { no: 33, name: '니드리노', type: ['독'] },
        { no: 34, name: '니드킹', type: ['독', '땅'] },
        { no: 35, name: '삐삐', type: ['페어리'] },
        { no: 36, name: '픽시', type: ['페어리'] },
        { no: 37, name: '식스테일', type: ['불꽃'] },
        { no: 38, name: '나인테일', type: ['불꽃'] },
        { no: 39, name: '푸린', type: ['노말', '페어리'] },
        { no: 40, name: '푸크린', type: ['노말', '페어리'] },

        { no: 41, name: '주뱃', type: ['독', '비행'] },
        { no: 42, name: '골뱃', type: ['독', '비행'] },
        { no: 43, name: '뚜벅초', type: ['풀', '독'] },
        { no: 44, name: '냄새꼬', type: ['풀', '독'] },
        { no: 45, name: '라플레시아', type: ['풀', '독'] },
        { no: 46, name: '파라스', type: ['벌레', '풀'] },
        { no: 47, name: '파라섹트', type: ['벌레', '풀'] },
        { no: 48, name: '콘팡', type: ['벌레', '독'] },
        { no: 49, name: '도나리', type: ['벌레', '독'] },
        { no: 50, name: '디그다', type: ['땅'] },

        { no: 51, name: '닥트리오', type: ['땅'] },
        { no: 52, name: '나옹', type: ['노말'] },
        { no: 53, name: '페르시온', type: ['노말'] },
        { no: 54, name: '고라파덕', type: ['물'] },
        { no: 55, name: '골덕', type: ['물'] },
        { no: 56, name: '망키', type: ['격투'] },
        { no: 57, name: '성원숭', type: ['격투'] },
        { no: 58, name: '가디', type: ['불꽃'] },
        { no: 59, name: '윈디', type: ['불꽃'] },
        { no: 60, name: '발챙이', type: ['물'] },

        { no: 61, name: '수륙챙이', type: ['물'] },
        { no: 62, name: '강챙이', type: ['물', '격투'] },
        { no: 63, name: '캐이시', type: ['에스퍼'] },
        { no: 64, name: '윤겔라', type: ['에스퍼'] },
        { no: 65, name: '후딘', type: ['에스퍼'] },
        { no: 66, name: '알통몬', type: ['격투'] },
        { no: 67, name: '근육몬', type: ['격투'] },
        { no: 68, name: '괴력몬', type: ['격투'] },
        { no: 69, name: '모다피', type: ['풀', '독'] },
        { no: 70, name: '우츠동', type: ['풀', '독'] },

        { no: 71, name: '우츠보트', type: ['풀', '독'] },
        { no: 72, name: '왕눈해', type: ['물', '독'] },
        { no: 73, name: '독파리', type: ['물', '독'] },
        { no: 74, name: '꼬마돌', type: ['바위', '땅'] },
        { no: 75, name: '데구리', type: ['바위', '땅'] },
        { no: 76, name: '딱구리', type: ['바위', '땅'] },
        { no: 77, name: '포니타', type: ['불꽃'] },
        { no: 78, name: '날썡마', type: ['불꽃'] },
        { no: 79, name: '야돈', type: ['물', '에스퍼'] },
        { no: 80, name: '야도란', type: ['물', '에스퍼'] },

        { no: 81, name: '코일', type: ['전기', '강철'] },
        { no: 82, name: '레어코일', type: ['전기', '강철'] },
        { no: 83, name: '파오리', type: ['노말', '비행'] },
        { no: 84, name: '두두', type: ['노말', '비행'] },
        { no: 85, name: '두트리오', type: ['노말', '비행'] },
        { no: 86, name: '쥬쥬', type: ['물'] },
        { no: 87, name: '쥬레곤', type: ['물', '얼음'] },
        { no: 88, name: '질퍽이', type: ['독'] },
        { no: 89, name: '질뻐기', type: ['독'] },
        { no: 90, name: '셀러', type: ['물'] },

        { no: 91, name: '파르셀', type: ['물', '얼음'] },
        { no: 92, name: '고오스', type: ['고스트', '독'] },
        { no: 93, name: '고오스트', type: ['고스트', '독'] },
        { no: 94, name: '팬텀', type: ['고스트', '독'] },
        { no: 95, name: '롱스톤', type: ['바위', '땅'] },
        { no: 96, name: '슬리프', type: ['에스퍼'] },
        { no: 97, name: '슬리퍼', type: ['에스퍼'] },
        { no: 98, name: '크랩', type: ['물'] },
        { no: 99, name: '킹크랩', type: ['물'] },
        { no: 100, name: '찌리리공', type: ['전기'] },

        { no: 101, name: '붐볼', type: ['전기'] },
        { no: 102, name: '아라리', type: ['풀', '에스퍼'] },
        { no: 103, name: '나시', type: ['풀', '에스퍼'] },
        { no: 104, name: '탕구리', type: ['땅'] },
        { no: 105, name: '텅구리', type: ['땅'] },
        { no: 106, name: '시라소몬', type: ['격투'] },
        { no: 107, name: '홍수몬', type: ['격투'] },
        { no: 108, name: '내루미', type: ['노말'] },
        { no: 109, name: '또가스', type: ['독'] },
        { no: 110, name: '또도가스', type: ['독'] },

        { no: 111, name: '뿔카노', type: ['땅', '바위'] },
        { no: 112, name: '코뿌리', type: ['땅', '바위'] },
        { no: 113, name: '럭키', type: ['노말'] },
        { no: 114, name: '덩쿠리', type: ['풀'] },
        { no: 115, name: '캥카', type: ['노말'] },
        { no: 116, name: '쏘드라', type: ['물'] },
        { no: 117, name: '시드라', type: ['물'] },
        { no: 118, name: '콘치', type: ['물'] },
        { no: 119, name: '왕콘치', type: ['물'] },
        { no: 120, name: '별가사리', type: ['물'] },

        { no: 121, name: '아쿠스타', type: ['물', '에스퍼'] },
        { no: 122, name: '마임맨', type: ['에스퍼', '페어리'] },
        { no: 123, name: '스라크', type: ['벌레', '비행'] },
        { no: 124, name: '루주라', type: ['얼음', '에스퍼'] },
        { no: 125, name: '에레브', type: ['전기'] },
        { no: 126, name: '마그마', type: ['불꽃'] },
        { no: 127, name: '쁘사이저', type: ['벌레'] },
        { no: 128, name: '켄타로스', type: ['노말'] },
        { no: 129, name: '잉어킹', type: ['물'] },
        { no: 130, name: '갸라도스', type: ['물', '비행'] },

        { no: 131, name: '라프라스', type: ['물', '얼음'] },
        { no: 132, name: '메타몽', type: ['노말'] },
        { no: 133, name: '이브이', type: ['노말'] },
        { no: 134, name: '샤미드', type: ['물'] },
        { no: 135, name: '쥬피썬더', type: ['전기'] },
        { no: 136, name: '부스터', type: ['불꽃'] },
        { no: 137, name: '폴리곤', type: ['노말'] },
        { no: 138, name: '암나이트', type: ['바위', '물'] },
        { no: 139, name: '암스타', type: ['바위', '물'] },
        { no: 140, name: '투구', type: ['바위', '물'] },

        { no: 141, name: '투구푸스', type: ['바위', '물'] },
        { no: 142, name: '프테라', type: ['바위', '비행'] },
        { no: 143, name: '잠만보', type: ['노말'] },
        { no: 144, name: '프리져', type: ['얼음', '비행'] },
        { no: 145, name: '썬더', type: ['전기', '비행'] },
        { no: 146, name: '파이어', type: ['불꽃', '비행'] },
        { no: 147, name: '미뇽', type: ['드래곤'] },
        { no: 148, name: '신룡', type: ['드래곤'] },
        { no: 149, name: '망나뇽', type: ['드래곤', '비행'] },
        { no: 150, name: '뮤츠', type: ['에스퍼'] },

        { no: 151, name: '뮤', type: ['에스퍼'] },

    ]
})
let lineUP = createSlice({ // 현재 라인업 저장
    name: 'lineUP',
    initialState: [
        {
            no: 0, name: '한지우', monster: [
                { no: 145, name: '썬더', type: ['전기', '비행'] },
                { no: 146, name: '파이어', type: ['불꽃', '비행'] },
                { no: 147, name: '미뇽', type: ['드래곤'] },
                { no: 148, name: '신룡', type: ['드래곤'] },
                { no: 149, name: '망나뇽', type: ['드래곤', '비행'] },
                { no: 150, name: '뮤츠', type: ['에스퍼'] },
            ]
        },
    ],
    reducers: {
        addlineUp(state, action) {
            state.push(action.payload)
        },
        removelineUp(state, action) {
            let num = state.findIndex((a) => { return a.no === action.payload })
            state.splice(num, 1);
        },
        updatedlinUP(state, action) {
            let num = state.findIndex((a) => { return a.no === action.payload.no })
            state.splice(num, 1, action.payload)
        },
    }
})
let lineNum = createSlice({//총 게시물 발행 갯수 저장
    name: 'lineNum',
    initialState: {
        num: 1
    },
    reducers: {
        newlineUp(state, action) {
            state.num++
        }
    }
})
let cart = createSlice({ // edit 에서 고른 포켓몬 
    // 임시 보관 장소, 여기서 보관 했다가, 
    // 트레이너 이름까지 작성 완료 시
    // lineUp 으로 이관해서 보관 예정
    name: 'cart',
    initialState:
        { no: 0, name: '트레이너님의 이름을 적어주세요.', monster: [] },
    reducers: {
        cartCart(state, action) {
            if (state.monster.length <= 5) {
                state.monster.push(action.payload)
            } else {
                alert('동행이 가능한 포켓몬은 최대 6마리입니다.')
            }
        },
        cartDelet(state, action) {
            state.monster.splice(action.payload, 1)
        },
        cartName(state, action) {
                state.name = action.payload
        },
        cartReset(state) {
            state.no = 0;
            state.name = '트레이너님의 이름을 적어주세요';
            state.monster = [];
            console.log('리셋완료');
        },
        cartBlank(state, action) {
            state.no = action.payload.no;
            state.name = action.payload.name;
            state.monster = action.payload.monster;
        }
    }

})




export default configureStore({
    reducer: {
        poketType: poketType.reducer,
        poketMon: poketMon.reducer,
        lineUP: lineUP.reducer,
        cart: cart.reducer,
        lineNum: lineNum.reducer,
    }
})
export let { cartCart, cartDelet, cartName, cartReset, cartBlank } = cart.actions;
export let { addlineUp, removelineUp, updatedlinUP } = lineUP.actions;
export let { newlineUp } = lineNum.actions;