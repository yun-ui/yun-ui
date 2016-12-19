export default [
    {
        'title': {
            'main': '基础样式',
            'secondary': 'Basic CSS',
            'icon': require('./assets/base.png')
        },
        'list': [
            {
                'path': '/color',
                'name': '颜色 Color'
            },
            {
                'path': '/layout',
                'name': '布局 Layout'
            },
            {
                'path': '/utility',
                'name': '辅助类 Utility'
            },
            {
                'path': '/typography',
                'name': '文字排版 Typography'
            },
            // 外层path要写成/pathName形式，它的children子路由要只写名称，要保证url路径名，文件资源名与path名称三者统一
            {
                'path': '/statePage',
                'name': '状态页 StatePage',
                'children': [
                    {
                        'path': 'index',
                        'name': 'StateIndex'
                    },
                    {
                        'path': 'statePage1',
                        'name': 'StatePage1'
                    },
                    {
                        'path': 'statePage2',
                        'name': 'StatePage2'
                    },
                    {
                        'path': 'statePage3',
                        'name': 'StatePage3'
                    },
                    {
                        'path': 'statePage4',
                        'name': 'StatePage4'
                    },
                    {
                        'path': 'statePage5',
                        'name': 'StatePage5'
                    },
                    {
                        'path': 'statePage6',
                        'name': 'StatePage6'
                    }
                ]
            }
        ]
    },
    {
        'title': {
            'main': 'CSS 组件',
            'secondary': 'CSS Component',
            'icon': require('./assets/CSS.png')
        },
        'list': [
            {
                'path': '/navbar',
                'name': '顶部导航 Navbar'
            },
            {
                'path': '/tabbar',
                'name': '底部导航 Tabbar'
            },
            {
                'path': '/button',
                'name': '按钮 Button'
            },
            {
                'path': '/buttonGroup',
                'name': '按钮组 ButtonGroup'
            },
            {
                'path': '/list',
                'name': '列表 List'
            }
        ]
    },
    {
        'title': {
            'main': 'JS 组件',
            'secondary': 'JS Component',
            'icon': require('./assets/JS.png')
        },
        'list': [
            {
                'path': '/loading',
                'name': '加载 Loading'
            },
            {
                'path': '/toast',
                'name': '提示 Toast'
            },
            {
                'path': '/popup',
                'name': '弹窗 Popup'
            }
        ]
    },
    {
        'title': {
            'main': '表单组件',
            'secondary': 'Form Component',
            'icon': require('./assets/form.png')
        },
        'list': [
            {
                'path': '/input',
                'name': '输入框 Input'
            }
        ]
    }
]
