$.keyframe.define([{
    name: 'animate',
    '0%': {
        'color' : 'green'
    },
    '100%': {
        'color' : 'yellow'
    }
    }
]);

$("li").playKeyframe({
    name: 'animate',
    duration: 2000
});
