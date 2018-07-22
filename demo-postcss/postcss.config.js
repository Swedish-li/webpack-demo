module.exports = {
    plugins: [
        require('precss'),
        // 添加样式前缀
        require('autoprefixer'),
        require('stylelint')
    ]
}