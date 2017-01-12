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
                'name': 'Color',
                'secondary': '颜色 '
            },
            {
                'path': '/layout',
                'name': 'Layout',
                'secondary': '布局 '
            },
            {
                'path': '/utility',
                'name': 'Utility',
                'secondary': '辅助类 '
            },
            {
                'path': '/typography',
                'name': 'Typography',
                'secondary': '文字排版 '
            },
            // 外层path要写成/pathName形式，它的children子路由要只写名称，要保证url路径名，文件资源名与path名称三者统一
            {
                'path': '/statePage',
                'name': 'StatePage',
                'secondary': '状态页 ',
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
                'name': 'Navbar',
                'secondary': '顶部导航 '
            },
            {
                'path': '/tabbar',
                'name': 'Tabbar',
                'secondary': '底部导航 '
            },
            {
                'path': '/button',
                'name': 'Button',
                'secondary': '按钮 '
            },
            {
                'path': '/buttonGroup',
                'name': 'ButtonGroup',
                'secondary': '按钮组 '
            },
            {
                'path': '/list',
                'name': 'List',
                'secondary': '列表 '
            },
            {
                'path': '/badge',
                'name': 'Badge',
                'secondary': '徽章 '
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
                'name': 'Loading',
                'secondary': '加载 '
            },
            {
                'path': '/toast',
                'name': 'Toast',
                'secondary': '提示 '
            },
            {
                'path': '/popup',
                'name': 'Popup',
                'secondary': '弹窗 '
            },
            {
                'path': '/actionSheet',
                'name': 'ActionSheet',
                'secondary': '操作面板 '
            },
            {
                'path': '/search',
                'name': 'Search',
                'secondary': '搜索 '
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
                'path': '/checkbox',
                'name': 'Checkbox',
                'secondary': '复选框 '
            },
            {
                'path': '/counter',
                'name': 'Counter',
                'secondary': '计数器 '
            },
            {
                'path': '/input',
                'name': 'Input',
                'secondary': '单行输入框 '
            },
            {
                'path': '/radio',
                'name': 'Radio',
                'secondary': '单选框 '
            },
            {
                'path': '/switch',
                'name': 'Switch',
                'secondary': '开关 '
            },
            {
                'path': '/textarea',
                'name': 'Textarea',
                'secondary': '多行输入框 '
            }
        ]
    }
]
