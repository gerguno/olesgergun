module.exports = {
    apps: [
        {
            name: 'olesgergun',
            cwd: '/var/www/olesgergun',
            script: 'npm',
            args: 'run lol',
            env: {
                DATOCMS_API_TOKEN: '8558b4d3562990c96bb23dacfbf80d',
            },
        },
    ],
};