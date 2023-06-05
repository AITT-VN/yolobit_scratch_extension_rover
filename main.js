const iconURL = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTYuMDMgMjUxLjY4Ij48ZGVmcz48c3R5bGU+LmNsc' +
'y0xe2ZpbGw6I2ZmZjt9PC9zdHlsZT48L2RlZnM+PGcgaWQ9IkxheWVyXzIiIGRhdGEtbmFtZT0iTGF5ZXIgMiI+PGcgaWQ9IkxheWVyXzEtMiIgZGF0YS1uYW1lPSJMYXllciAxIj48cGF0aCBjbGFzcz0iY' +
'2xzLTEiIGQ9Ik00NC4yMiwyMS4zMWMwLDguNDMtLjA2LDE2LjczLDAsMjUsLjE0LDE1LjA5LDExLjY4LDIzLjgsMjYuMzUsMjAsNy43LTIsMTMuMS04LDEzLjU3LTE2LC40NS03LjY0LjIzLTE1LjMyLjMtM' +
'jMsMC0yLDAtMy45NSwwLTYuMmg4OS4xNGMwLDgsLjMzLDE1LjgxLS4wNiwyMy41OC0xLDE5LjI1LDE0LjkyLDI1LjMzLDI5LjgyLDIwLjUyLDcuMS0yLjI5LDEwLjM1LTcuNDMsMTAuNDQtMTUuODMuMDktO' +
'S4zMSwwLTE4LjYxLDAtMjguMjEsOS45MywwLDE5LjU3LS42MywyOS4wOS4yLDcuNDIuNjQsMTIuNSw3LjQxLDEzLDE1LC4xMSwxLjUuMDcsMywuMDcsNC41VjIzMS43OGMwLDEzLjY5LTYuMTQsMTkuODktM' +
'TkuNzgsMTkuODlxLTEwOC4xOSwwLTIxNi40MSwwQzYuMTUsMjUxLjY3LDAsMjQ1LjUsMCwyMzEuODNRMCwxMzYuMTIsMCw0MC40MUMwLDI3LDYuMTMsMjAuODUsMTkuNTEsMjAuODRjNy42NiwwLDE1LjMyL' +
'DAsMjMsLjA1QTEyLjI0LDEyLjI0LDAsMCwxLDQ0LjIyLDIxLjMxWk0yMzkuNDQsODYuMDhIMTYuNjdWMjM0Ljc2SDIzOS40NFoiLz48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik0xODEuODQsMjljMC02LjE2L' +
'S4xMi0xMi4zMiwwLTE4LjQ4QzE4Miw0LjA2LDE4NiwuMzMsMTkyLjY4LDBjNy41MS0uMzQsMTIuNTEsMywxMi43MSw5LjU2cS41NywxOS43LDAsMzkuNDJjLS4yLDYuNi01LjIzLDkuOTItMTIuNzIsOS41N' +
'S02Ljc2LS4zNC0xMC41My00LTEwLjg0LTEwLjU0LDAtLjMzLDAtLjY3LDAtMVYyOVoiLz48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik03Ni4yMiwyOS4zNmMwLDYuMzMuMTMsMTIuNjUsMCwxOUM3Niw1NS4wO' +
'Sw3Miw1OC42Nyw2NC44NCw1OC43OGMtNy41NS4xMi0xMi4wNS0zLjIzLTEyLjIxLTEwLjA2cS0uNDUtMTkuMiwwLTM4LjQzQzUyLjc5LDMuNTEsNTcuMzcuMTgsNjUsLjM2LDcyLjE1LjU0LDc2LDQuMDUsN' +
'zYuMTksMTAuOSw3Ni4zNCwxNy4wNSw3Ni4yMiwyMy4yMSw3Ni4yMiwyOS4zNloiLz48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik0xNTAuOTMsMTM1Ljg1Yy00LjE1LDAtOC4zMS0uMTEtMTIuNDUsMC0zLC4xM' +
'S00LjI2LTEuMDktNC4yMy00LjA2LjA2LTcuMy0uMTgtMTQuNjMuMi0yMS45Mi4wNy0xLjM0LDIuNDItMy42MywzLjc5LTMuNjgsOC42Mi0uMzQsMTcuMjctLjE2LDI1LjkxLS4xOSwyLjY1LDAsMy45MywxL' +
'DMuOSwzLjg3LS4xLDcuNDcuMTIsMTUtLjIsMjIuNDIsMCwxLjIyLTIuMTcsMy4yMy0zLjQ3LDMuMzZDMTU5LjkzLDEzNi4xMSwxNTUuNDIsMTM1Ljg1LDE1MC45MywxMzUuODVaIi8+PHBhdGggY2xhc3M9I' +
'mNscy0xIiBkPSJNMTk5LjIxLDEzNS44NWMtNC4xNiwwLTguMzItLjEzLTEyLjQ2LjA1LTMuMi4xNC00LjU1LTEuMDctNC41LTQuMy4xMS03LjE0LjA5LTE0LjI5LDAtMjEuNDMsMC0zLDEuMjctNC4xNyw0L' +
'jIxLTQuMTVxMTIuNzEuMTIsMjUuNDIsMGMyLjg5LDAsNC4yMiwxLDQuMTcsNC4xMS0uMTMsNy4zMS0uMSwxNC42MiwwLDIxLjkzLDAsMi43OC0xLjE1LDMuODctMy44OSwzLjgxQzIwNy44NSwxMzUuNzgsM' +
'jAzLjUzLDEzNS44NSwxOTkuMjEsMTM1Ljg1WiIvPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTU1LjIsMTc3LjY0Yy00LjE2LDAtOC4zMS0uMDktMTIuNDYsMC0zLjE0LjEtNC41Ny0xLjExLTQuNTItNC4zN' +
'i4xLTcuMTQuMDctMTQuMjgsMC0yMS40MywwLTIuOTUsMS4yMS00LjEzLDQuMi00LjA4LDguNDcuMTIsMTcsLjEsMjUuNDIsMCwyLjkyLDAsNC4yNS45NSw0LjE5LDQtLjEyLDcuMTQtLjE1LDE0LjI5LDAsM' +
'jEuNDMuMDgsMy4yNy0xLjIzLDQuNS00LjM5LDQuNDFDNjMuNTEsMTc3LjU1LDU5LjM1LDE3Ny42NCw1NS4yLDE3Ny42NFoiLz48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik0xMDMsMTc3LjY0Yy00LDAtOC0uM' +
'TItMTIsMC0zLjM3LjE0LTQuODUtMS4xMy00Ljc3LTQuNjIuMTUtNywuMTItMTQsMC0yMC45MywwLTMuMjEsMS4yNC00LjQsNC40Ny00LjM0cTEyLjQ1LjIyLDI0LjkxLDBjMy4xNiwwLDQuNTMsMSw0LjQ1LDQuMjktLjE1LDcuMTQtLjEzLDE0LjI5LDAsMjEuNDMuMDYsMy0xLjIzLDQuMjEtNC4xNCw0LjE1QzExMS41OSwxNzcuNTgsMTA3LjI3LDE3Ny42NCwxMDMsMTc3LjY0WiIvPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTE1MS4zMywxNDcuODRjNC4xNiwwLDguMzEuMDksMTIuNDYsMCwyLjg2LS4wOSw0LjMyLjgsNC4yNywzLjk0LS4xMyw3LjMxLS4xMSwxNC42MywwLDIxLjkzLDAsMi43NS0xLjA3LDQtMy44LDQtOC42NCwwLTE3LjI4LS4wNi0yNS45MiwwLTMsMC00LjExLTEuMzktNC4wOS00LjI3LjA4LTcuMTQuMDctMTQuMjksMC0yMS40MywwLTIuODksMS4wNy00LjI3LDQuMTItNC4xNkMxNDIuNjksMTQ4LDE0NywxNDcuODQsMTUxLjMzLDE0Ny44NFoiLz48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik0xOTkuMjMsMTQ3Ljg0YzQuMzIsMCw4LjY0LjA3LDEzLDAsMi43NS0uMDYsMy45LDEuMDYsMy44NywzLjgzcS0uMTMsMTEsMCwyMS45M2MwLDIuNjYtLjg4LDQuMDgtMy42OCw0LjA3LTguODEsMC0xNy42Mi4xMy0yNi40MS0uMTctMS4yNiwwLTMuNDQtMi4yMi0zLjUtMy40OC0uMzMtNy40Ni0uMTQtMTQuOTQtLjE4LTIyLjQyLDAtMi43NCwxLjI1LTMuODQsNC0zLjc2QzE5MC41OCwxNDcuOTMsMTk0LjkxLDE0Ny44NCwxOTkuMjMsMTQ3Ljg0WiIvPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTU1LjIxLDIxOS4yYy00LjE2LDAtOC4zMi0uMTEtMTIuNDgsMC0zLjEzLjExLTQuNTgtMS00LjUyLTQuMzEuMTItNy4xNi4wOC0xNC4zMSwwLTIxLjQ3LDAtMi43MiwxLjEzLTMuODgsMy45LTMuODVxMTMsLjEyLDI2LDBjMi42OCwwLDQsLjksMy45NCwzLjc3cS0uMTcsMTEsMCwyMmMwLDIuOC0xLjEzLDMuOTMtMy44NSwzLjg4QzYzLjg3LDIxOS4xNCw1OS41NCwyMTkuMTksNTUuMjEsMjE5LjJaIi8+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNMTAzLjI3LDIxOS4yYy00LjE2LDAtOC4zMy0uMS0xMi40OCwwLTMuMDkuMS00LjYyLTEtNC41Ni00LjI3LjEyLTcuMTUuMDctMTQuMzEsMC0yMS40NywwLTIuNjgsMS0zLjkzLDMuODQtMy45LDguNjYuMDgsMTcuMzEuMDYsMjYsMCwyLjYyLDAsNCwuOCw0LDMuNzEtLjExLDcuMzItLjEzLDE0LjY1LDAsMjIsLjA2LDMuMi0xLjUyLDQtNC4zMSwzLjk0QzExMS41OSwyMTkuMTMsMTA3LjQzLDIxOS4yLDEwMy4yNywyMTkuMloiLz48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik0xNTEsMjE5LjJjLTQuMTYsMC04LjMzLS4wOS0xMi40OCwwLTIuOTQuMDgtNC4yNy0xLjA3LTQuMjQtNC4wOHEuMTItMTAuNzQsMC0yMS40N2MwLTMsMS4xOS00LjE0LDQuMTgtNC4xLDguNDkuMTIsMTcsLjEsMjUuNDcsMCwyLjkxLDAsNC4yMy45NSw0LjE3LDRxLS4yMSwxMC43NCwwLDIxLjQ3Yy4wNiwzLjA1LTEuMTgsNC4xOS00LjEyLDQuMTJDMTU5LjYyLDIxOS4xMiwxNTUuMjksMjE5LjIsMTUxLDIxOS4yWiIvPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTE5OS4yLDIxOS4yYy00LjE2LDAtOC4zMi0uMTEtMTIuNDgsMC0zLjE2LjExLTQuNTMtMS4xLTQuNDctNC4zNXEuMTgtMTAuNDgsMC0yMWMtLjA2LTMuMjMsMS4yMy00LjQsNC40NC00LjM1cTEyLjQ4LjIzLDI1LDBjMy4xNi0uMDUsNC41MSwxLDQuNDIsNC4zMXEtLjI1LDEwLjQ5LDAsMjFjLjA5LDMuMjktMS4yLDQuNDgtNC4zOSw0LjM3QzIwNy41MywyMTkuMDksMjAzLjM2LDIxOS4yLDE5OS4yLDIxOS4yWiIvPjwvZz48L2c+PC9zdmc+';

// Core, Team, and Official extension classes should be registered statically with the Extension Manager.
// See: scratch-vm/src/extension-support/extension-manager.js
class Scratch3YoloBitRover {
    getInfo () {
        return {
            id: 'YoloBitRoverExtension',
            parentMode: 'YoloBit',
            name: 'Rover',
            blockIconURI: iconURL,
            color1: '#5AAECC',
            color2: '#488BA3',
            blocks: [
                {
                    opcode: 'rover_move',
                    rawCode: {
                        imports: 'from rover import *\n',
                        code:'rover/*{DIR}*/(/*{SPEED}*/)\n'
                    },
                    text: [
                        {
                            default: 'di chuyển [DIR] với tốc độ [SPEED] (0-100)',
                            id: "gui.externalExtension.YoloBitRoverExtension.rover_move"
                        }
                    ],
                    arguments: {
                        DIR: {
                            menu: 'dirs'
                        },
                        SPEED: {
                            type: ArgumentType.NUMBER,
                            defaultValue: 50
                        }
                    },
                    blockType: Scratch.BlockType.COMMAND
                },
                {
                    opcode: 'rover_move_delay',
                    rawCode: {
                        imports: 'from rover import *\n',
                        code:'rover/*{DIR}*/(/*{SPEED}*/, /*{TIME_DELAY}*/)\n'
                    },
                    text: [
                        {
                            default: 'di chuyển [DIR] với tốc độ [SPEED] (0-100) trong [TIME_DELAY]',
                            id: "gui.externalExtension.YoloBitRoverExtension.rover_move_delay"
                        }
                    ],
                    arguments: {
                        DIR: {
                            menu: 'dirs'
                        },
                        SPEED: {
                            type: ArgumentType.NUMBER,
                            defaultValue: 50
                        },
                        TIME_DELAY: {
                            type: ArgumentType.NUMBER,
                            defaultValue: 1000
                        }
                    },
                    blockType: Scratch.BlockType.COMMAND
                },
                {
                    opcode: 'rover_wheels_speed',
                    rawCode: {
                        imports: 'from rover import *\n',
                        code:'rover.set_wheel_speed(/*{LEFT}*/, /*{RIGHT}*/)\n'
                    },
                    text: [
                        {
                            default: 'quay động cơ trái tốc độ [LEFT] động cơ phải [RIGHT] (-100 đến 100)',
                            id: "gui.externalExtension.YoloBitRoverExtension.rover_wheels_speed"
                        }
                    ],
                    arguments: {
                        LEFT: {
                            type: ArgumentType.NUMBER,
                            defaultValue: 50
                        },
                        RIGHT: {
                            type: ArgumentType.NUMBER,
                            defaultValue: 50
                        }
                    },
                    blockType: Scratch.BlockType.COMMAND
                },
                {
                    opcode: 'rover_stop',
                    rawCode: {
                        imports: 'from rover import *\n',
                        code:'rover.stop()\n'
                    },
                    text: [
                        {
                            default: 'dừng di chuyển',
                            id: "gui.externalExtension.YoloBitRoverExtension.rover_stop"
                        }
                    ],
                    blockType: Scratch.BlockType.COMMAND
                },
                {
                    opcode: 'rover_servo_180',
                    rawCode: {
                        imports: 'from rover import *\n',
                        code:'rover.servo_write(/*{PINS}*/,/*{VALUE}*/)\n'
                    },
                    text: [
                        {
                            default: 'quay servo chân [PINS] đến vị trí (0-180 độ) [VALUE]',
                            id: "gui.externalExtension.YoloBitRoverExtension.rover_servo_180"
                        }
                    ],
                    arguments: {
                        PINS: {
                            menu: 'servo_pins'
                        },
                        VALUE: {
                            type: ArgumentType.NUMBER,
                            defaultValue: 50
                        }
                    },
                    blockType: Scratch.BlockType.COMMAND
                },
                {
                    opcode: 'rover_servo_360',
                    rawCode: {
                        imports: 'from rover import *\n',
                        code:'rover.servo360_write(/*{PINS}*/,/*{VALUE}*/)\n'
                    },
                    text: [
                        {
                            default: 'quay servo 360 chân [PINS] với tốc độ [VALUE]',
                            id: "gui.externalExtension.YoloBitRoverExtension.rover_servo_360"
                        }
                    ],
                    arguments: {
                        PINS: {
                            menu: 'servo_pins'
                        },
                        VALUE: {
                            type: ArgumentType.NUMBER,
                            defaultValue: 50
                        }
                    },
                    blockType: Scratch.BlockType.COMMAND
                },
                {
                    opcode: 'rover_read_linesensor',
                    rawCode: {
                        imports: 'from rover import *\n',
                        code:'rover.read_line_sensors(/*{SEN_NUMBER}*/)\n'
                    },
                    text: [
                        {
                            default: 'cảm biến line đọc giá trị [SEN_NUMBER]',
                            id: "gui.externalExtension.YoloBitRoverExtension.rover_read_linesensor"
                        }
                    ],
                    arguments: {
                        SEN_NUMBER: {
                            menu: 'lines_number'
                        }
                    },
                    blockType: Scratch.BlockType.NUMBER
                },
                {
                    opcode: 'rover_read_ultrasonic',
                    rawCode: {
                        imports: 'from rover import *\n',
                        code:'rover.ultrasonic.distance_cm()\n'
                    },
                    text: [
                        {
                            default: 'đọc cảm biến khoảng cách',
                            id: "gui.externalExtension.YoloBitRoverExtension.rover_read_ultrasonic"
                        }
                    ],
                    arguments: {

                    },
                    blockType: Scratch.BlockType.NUMBER
                },
                {
                    opcode: 'rover_compare_distance',
                    rawCode: {
                        imports: 'from rover import *\n',
                        code:'rover.ultrasonic.distance_cm() /*{COMPARE}*/ /*{DISTANCE}*/\n'
                    },
                    text: [
                        {
                            default: 'đọc cảm biến khoảng cách [COMPARE] [DISTANCE] cm',
                            id: "gui.externalExtension.YoloBitRoverExtension.rover_compare_distance"
                        }
                    ],
                    arguments: {
                        COMPARE: {
                            menu: 'compare'
                        },
                        DISTANCE: {
                            type: ArgumentType.NUMBER,
                            defaultValue: 10
                        }
                    },
                    blockType: Scratch.BlockType.BOOLEAN
                },
                {
                    opcode: 'rover_show_led',
                    rawCode: {
                        imports: 'from rover import *\n',
                        code:'rover.show_led(/*{LED}*/, /*{STATUS}*/)\n'
                    },
                    text: [
                        {
                            default: '[STATUS] đèn [LED]',
                            id: "gui.externalExtension.YoloBitRoverExtension.rover_show_led"
                        }
                    ],
                    arguments: {
                        STATUS: {
                            menu: 'status'
                        },
                        LED: {
                            menu: 'led'
                        }
                    },
                    blockType: Scratch.BlockType.COMMAND
                },
                {
                    opcode: 'rover_show_RGB',
                    rawCode: {
                        imports: 'from rover import *\n',
                        code:"rover.show_rgb_led(1, hex_to_rgb('/*{COLOR}*/'))\nrover.show_rgb_led(2, hex_to_rgb('/*{COLOR}*/'))\nrover.show_rgb_led(3, hex_to_rgb('/*{COLOR}*/'))\nrover.show_rgb_led(4, hex_to_rgb('/*{COLOR}*/'))\nrover.show_rgb_led(5, hex_to_rgb('/*{COLOR}*/'))\nrover.show_rgb_led(6, hex_to_rgb('/*{COLOR}*/'))\n"
                    },
                    text: [
                        {
                            default: 'đổi led RGB 1 [COLOR] 2 [COLOR] 3 [COLOR] 4 [COLOR] 5 [COLOR] 6 [COLOR]',
                            id: "gui.externalExtension.YoloBitRoverExtension.rover_show_RGB"
                        }
                    ],
                    arguments: {                        
                        COLOR: {
                            menu: 'pick_colors'
                        }
                    },
                    blockType: Scratch.BlockType.COMMAND
                },
                {
                    opcode: 'rover_show_RGBled',
                    rawCode: {
                        imports: 'from rover import *\n',
                        code:"rover.show_rgb_led(/*{VALUE}*/, hex_to_rgb('/*{COLOR}*/'))\n"
                    },
                    text: [
                        {
                            default: 'đổi led RGB số [VALUE] thành màu [COLOR]',
                            id: "gui.externalExtension.YoloBitRoverExtension.rover_show_RGBled"
                        }
                    ],
                    arguments: {                        
                        COLOR: {
                            menu: 'pick_colors'
                        },
                        VALUE:{
                            type: ArgumentType.NUMBER,
                            defaultValue: 1
                        }
                    },
                    blockType: Scratch.BlockType.COMMAND
                },
                {
                    opcode: 'rover_showall_RGBled',
                    rawCode: {
                        imports: 'from rover import *\n',
                        code:"rover.show_rgb_led(0, hex_to_rgb('/*{COLOR}*/'))\n"
                    },
                    text: [
                        {
                            default: 'đổi màu tất cả led RGB thành màu [COLOR]',
                            id: "gui.externalExtension.YoloBitRoverExtension.rover_showall_RGBled"
                        }
                    ],
                    arguments: {                        
                        COLOR: {
                            menu: 'pick_colors'
                        }
                    },
                    blockType: Scratch.BlockType.COMMAND
                },
                {
                    opcode: 'rover_ir_event',
                    rawCode: {
                        imports: 'from rover import *\nrover_ir_rx.start()\n',
                        function: 'def on_ir_receive_callback(t_C3_ADn_hi_E1_BB_87u, addr, ext):\n' +
                                '/*{DO}*/' +
                                '    pass\n',
                        setup: 'rover_ir_rx.on_received(on_ir_receive_callback)\n',
                        code: '',
                        loop: ''
                    },
                    text: [
                        {
                            default: 'nếu nhận được tín hiệu từ remote',
                            id: 'gui.extension.YoloBitRoverExtension.rover_ir_event'
                        },
                        '[DO]'
                    ],
                    arguments: {                        
                        DO: {
                            type: ArgumentType.STATEMENT
                        }
                    },
                    disablePreviousStatement: true,
                    disableNextStatement: true,
                    blockType: BlockType.CUSTOM
                },
                {
                    opcode: 'rover_key',
                    rawCode: {
                        imports: 'from rover import *\n',
                        code:"IR_REMOTE_/*{KEYS}*/\n"
                    },
                    text: [
                        {
                            default: 'nút [KEYS]',
                            id: "gui.externalExtension.YoloBitRoverExtension.rover_key"
                        }
                    ],
                    arguments: {                        
                        KEYS: {
                            menu: 'pick_keys'
                        }
                    },
                    blockType: Scratch.BlockType.BOOLEAN
                },
                {
                    opcode: 'rover_press_key',
                    rawCode: {
                        imports: 'from rover import *\nrover_ir_rx.start()\n',
                        code:"rover_ir_rx.get_code() == IR_REMOTE_/*{KEYS}*/\n"
                    },
                    text: [
                        {
                            default: 'nút [KEYS] trên remote được nhấn',
                            id: "gui.externalExtension.YoloBitRoverExtension.rover_press_key"
                        }
                    ],
                    arguments: {                        
                        KEYS: {
                            menu: 'pick_keys'
                        }
                    },
                    blockType: Scratch.BlockType.BOOLEAN
                },
                {
                    opcode: 'rover_clear_key',
                    rawCode: {
                        imports: 'from rover import *\n',
                        code:"rover_ir_rx.clear_code()"
                    },
                    text: [
                        {
                            default: 'xóa tín hiệu đã thu được',
                            id: "gui.externalExtension.YoloBitRoverExtension.rover_clear_key"
                        }
                    ],
                    arguments: {                        
                        
                    },
                    blockType: Scratch.BlockType.COMMAND
                }                
            ],
            menus:{
                dirs: [
                    {
                        text: {
                            default: 'tới',
                            id: 'gui.externalExtension.YoloBitRoverExtension.forward'
                        },
                        value: '.forward'
                    },
                    {
                        text: {
                            default:'lùi',
                            id: 'gui.externalExtension.YoloBitRoverExtension.backward'
                        },
                        value: '.backward'
                    },
                    {
                        text: {
                            default:'trái',
                            id: 'gui.externalExtension.YoloBitRoverExtension.left'
                        },
                        value: '.turn_left'
                    },
                    {
                        text: {
                            default: 'phải',
                            id: 'gui.externalExtension.YoloBitRoverExtension.left'
                        },
                        value: '.turn_right'
                    }
                ],
                servo_pins: [
                    {
                        text: {
                            default: 'S1',
                            id: 'gui.externalExtension.YoloBitRoverExtension.S1'
                        },
                        value: '1'
                    },
                    {
                        text: {
                            default:'S2',
                            id: 'gui.externalExtension.YoloBitRoverExtension.S2'
                        },
                        value: '2'
                    }
                ],
                lines_number: [
                    {
                        text: {
                            default: 'S1',
                            id: 'gui.externalExtension.YoloBitRoverExtension.sensorS1'
                        },
                        value: '1'
                    },
                    {
                        text: {
                            default:'S2',
                            id: 'gui.externalExtension.YoloBitRoverExtension.sensorS2'
                        },
                        value: '2'
                    },
                    {
                        text: {
                            default: 'S1',
                            id: 'gui.externalExtension.YoloBitRoverExtension.sensorS3'
                        },
                        value: '3'
                    },
                    {
                        text: {
                            default:'S2',
                            id: 'gui.externalExtension.YoloBitRoverExtension.sensorS4'
                        },
                        value: '4'
                    }
                ],
                compare: [
                    {
                        text: {
                            default: '<',
                            id: 'gui.externalExtension.YoloBitRoverExtension.more'
                        },
                        value: '<'
                    },
                    {
                        text: {
                            default:'>',
                            id: 'gui.externalExtension.YoloBitRoverExtension.less'
                        },
                        value: '>'
                    },
                    {
                        text: {
                            default: '=',
                            id: 'gui.externalExtension.YoloBitRoverExtension.equal'
                        },
                        value: '='
                    }
                ],
                status: [
                    {
                        text: {
                            default: 'bật',
                            id: 'gui.externalExtension.YoloBitRoverExtension.on'
                        },
                        value: '1'
                    },
                    {
                        text: {
                            default:'>',
                            id: 'gui.externalExtension.YoloBitRoverExtension.off'
                        },
                        value: '0'
                    }
                ],
                led: [
                    {
                        text: {
                            default: 'cả 2 bên',
                            id: 'gui.externalExtension.YoloBitRoverExtension.on_all'
                        },
                        value: '0'
                    },
                    {
                        text: {
                            default:'trái',
                            id: 'gui.externalExtension.YoloBitRoverExtension.on_left'
                        },
                        value: '1'
                    },
                    {
                        text: {
                            default: 'phải',
                            id: 'gui.externalExtension.YoloBitRoverExtension.on_right'
                        },
                        value: '2'
                    }
                ],
                pick_colors: [
                    {
                        text: {
                            default:'đỏ',
                            id: 'gui.externalExtension.YoloBitRoverExtension.red'
                        },
                        value: "#ff0000"
                    },
                    {
                        text: {
                            default:'cam',
                            id: 'gui.externalExtension.YoloBitRoverExtension.orange'
                        },
                        value: "#ffa500"
                    },
                    {
                        text: {
                            default:'vàng',
                            id: 'gui.externalExtension.YoloBitRoverExtension.yellow'
                        },
                        value: "#ffff00"
                    },
                    {
                        text: {
                            default:'lục',
                            id: 'gui.externalExtension.YoloBitRoverExtension.green'
                        },
                        value: "#00ff00"
                    },
                    {
                        text: {
                            default:'lam',
                            id: 'gui.externalExtension.YoloBitRoverExtension.blue'
                        },
                        value: "#0000ff"
                    },
                    {
                        text: {
                            default:'chàm',
                            id: 'gui.externalExtension.YoloBitRoverExtension.cyan'
                        },
                        value: "#4b0082"
                    },
                    {
                        text: {
                            default:'tím',
                            id: 'gui.externalExtension.YoloBitRoverExtension.violet'
                        },
                        value: "#800080"
                    },
                    {
                        text: {
                            default:'trắng',
                            id: 'gui.externalExtension.YoloBitRoverExtension.white'
                        },
                        value: "#ffffff"
                    },
                    {
                        text: {
                            default:'đen',
                            id: 'gui.externalExtension.YoloBitRoverExtension.black'
                        },
                        value: "#000000"
                    }
                ],
                pick_keys: [
                    {
                        text: {
                            default:'A',
                            id: 'gui.externalExtension.YoloBitRoverExtension.keyA'
                        },
                        value: "A"
                    },
                    {
                        text: {
                            default:'B',
                            id: 'gui.externalExtension.YoloBitRoverExtension.keyB'
                        },
                        value: "B"
                    },
                    {
                        text: {
                            default:'C',
                            id: 'gui.externalExtension.YoloBitRoverExtension.keyC'
                        },
                        value: "C"
                    },
                    {
                        text: {
                            default:'D',
                            id: 'gui.externalExtension.YoloBitRoverExtension.keyD'
                        },
                        value: "D"
                    },
                    {
                        text: {
                            default:'E',
                            id: 'gui.externalExtension.YoloBitRoverExtension.keyE'
                        },
                        value: "E"
                    },
                    {
                        text: {
                            default:'F',
                            id: 'gui.externalExtension.YoloBitRoverExtension.keyF'
                        },
                        value: "F"
                    },
                    {
                        text: {
                            default:'tới',
                            id: 'gui.externalExtension.YoloBitRoverExtension.key_up'
                        },
                        value: "UP"
                    },
                    {
                        text: {
                            default:'lui',
                            id: 'gui.externalExtension.YoloBitRoverExtension.key_down'
                        },
                        value: "DOWN"
                    },
                    {
                        text: {
                            default:'trái',
                            id: 'gui.externalExtension.YoloBitRoverExtension.key_left'
                        },
                        value: "LEFT"
                    },
                    {
                        text: {
                            default:'phải',
                            id: 'gui.externalExtension.YoloBitRoverExtension.key_right'
                        },
                        value: "RIGHT"
                    },
                    {
                        text: {
                            default:'setup',
                            id: 'gui.externalExtension.YoloBitRoverExtension.key_setup'
                        },
                        value: "SETUP"
                    },
                    {
                        text: {
                            default:'0',
                            id: 'gui.externalExtension.YoloBitRoverExtension.key0'
                        },
                        value: "0"
                    },
                    {
                        text: {
                            default:'1',
                            id: 'gui.externalExtension.YoloBitRoverExtension.key1'
                        },
                        value: "1"
                    },
                    {
                        text: {
                            default:'2',
                            id: 'gui.externalExtension.YoloBitRoverExtension.key2'
                        },
                        value: "2"
                    },
                    {
                        text: {
                            default:'3',
                            id: 'gui.externalExtension.YoloBitRoverExtension.key3'
                        },
                        value: "3"
                    },
                    {
                        text: {
                            default:'4',
                            id: 'gui.externalExtension.YoloBitRoverExtension.key4'
                        },
                        value: "4"
                    },
                    {
                        text: {
                            default:'5',
                            id: 'gui.externalExtension.YoloBitRoverExtension.key5'
                        },
                        value: "5"
                    },
                    {
                        text: {
                            default:'6',
                            id: 'gui.externalExtension.YoloBitRoverExtension.key6'
                        },
                        value: "6"
                    },
                    {
                        text: {
                            default:'7',
                            id: 'gui.externalExtension.YoloBitRoverExtension.key7'
                        },
                        value: "7"
                    },
                    {
                        text: {
                            default:'8',
                            id: 'gui.externalExtension.YoloBitRoverExtension.key8'
                        },
                        value: "8"
                    },
                    {
                        text: {
                            default:'9',
                            id: 'gui.externalExtension.YoloBitRoverExtension.key9'
                        },
                        value: "9"
                    }
                ]
            }
        };
    }
}

Scratch.extensions.register(new Scratch3YoloBitRover());