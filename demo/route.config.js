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
                'name': 'Color'
            },
            {
                'path': '/layout',
                'name': 'Layout'
            },
            {
                'path': '/utility',
                'name': 'Utility'
            },
            {
                'path': '/typography',
                'name': 'Typography'
            },
            // 外层path要写成/pathName形式，它的children子路由要只写名称，要保证url路径名，文件资源名与path名称三者统一
            {
                'path': '/statePage',
                'name': 'StatePage',
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
                'name': 'Navbar'
            },
            {
                'path': '/tabbar',
                'name': 'Tabbar'
            },
            {
                'path': '/button',
                'name': 'Button'
            },
            {
                'path': '/buttonGroup',
                'name': 'ButtonGroup'
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
                'path': '/cell',
                'name': 'Cell'
            }
        ]
    },
    {
        'title': {
            'main': '表单组件',
            'secondary': 'Form Component',
            'icon': require('./assets/form.png')
        },
        'list': []
    }
]
