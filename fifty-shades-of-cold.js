import { colors } from './fifty-shades-of-cold.data.js'

export const generateClasses = () => {
    const style = document.createElement('style')
    let styleContent = ''

    colors.forEach(color => {
        styleContent += `.${color} {\n  background: ${color};\n}\n`
    })

    style.textContent = styleContent
    document.head.appendChild(style)

    // console.log(styleContent)
}

export const generateColdShades = () => {
    const coldColors = ['aqua', 'blue', 'turquoise', 'green', 'cyan', 'navy', 'purple']
    
    colors.forEach(color => {
        if (coldColors.some(coldColors => color.includes(coldColors))) {
            const div = document.createElement('div')
            div.className = color
            div.textContent = color
            document.body.appendChild(div)
            // console.log(div)
        }
    })
}

export const choseShade = (shade) => {
    const divs = document.querySelectorAll('div')
    divs.forEach(div => {
        div.className = shade
    })
}

const addEventListener = () => {
    const divs = document.querySelectorAll('div')
    divs.forEach(div => {
        div.addEventListener('click', () => choseShade(div.textContent))
    })
}
