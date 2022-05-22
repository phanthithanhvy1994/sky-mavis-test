import creditCard from '../../assets/Images/credit-card-fill.svg'
import Plane from '../../assets/Images/plane-fill.svg'
import Repeat from '../../assets/Images/repeat.svg'
import YEN from '../../assets/Images/yen.svg'
import EUR from '../../assets/Images/eur.svg'
import USD from '../../assets/Images/usd.svg'

const menu = [{
        name: 'Deposit',
        url: creditCard,
        isEnabled: false
    },
    {
        name: 'Send',
        url: Plane,
        isEnabled: true
    },
    {
        name: 'Swap',
        url: Repeat,
        isEnabled: false
    }
]

const walletID = '7300 3777 3888 3334'

const assets = [{
        id: 1,
        key: 'USD',
        value: 1000,
        text: '1,000 USD',
        icon: USD,
        dong: '23,046,000 VND'
    },
    {
        id: 2,
        key: 'EUR',
        value: 50,
        text: '50 EUD',
        icon: EUR,
        dong: '1,531,972 VND'
    },
    {
        id: 3,
        key: 'YEN',
        value: 10000,
        text: '10,000 YEN',
        icon: YEN,
        dong: '2,103,317 VND'
    }
]

export {
    menu,
    walletID,
    assets
}