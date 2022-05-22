import Copy from '../../assets/Images/copy.svg'

const form = (walletID, asset) => [{
        label: 'FROM',
        type: 'text',
        isDisabled: true,
        defaultValue: walletID,
        required: false
    },
    {
        label: 'To',
        type: 'text',
        isDisabled: false,
        required: true,
        message: 'This is required'
    },
    {
        label: 'Asset',
        type: 'seletct',
        isDisabled: false,
        defaultValue: asset.key,
        icon: Copy,
        iconAsset: asset.icon
    },
    {
        label: 'Amount',
        type: 'number',
        isDisabled: false,
        required: true,
        message: 'This is required',
        helper: `available: ${asset.text}`,
        max: asset.value
    }
]

export {
    form
}