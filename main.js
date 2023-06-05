const iconURL = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDI0IDI0IiBoZWlnaHQ9IjM2cHgiIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjM2cHgiIGZpbGw9IiNGRkZGRkYiPjxnPjxyZWN0IGZpbGw9Im5vbmUiIGhlaWdodD0iMjQiIHdpZHRoPSIyNCIgeT0iMCIvPjwvZz48Zz48cGF0aCBkPSJNMTguOTIsNi4wMUMxOC43Miw1LjQyLDE4LjE2LDUsMTcuNSw1aC0xMUM1Ljg0LDUsNS4yOSw1LjQyLDUuMDgsNi4wMUwzLDEydjhjMCwwLjU1LDAuNDUsMSwxLDFoMWMwLjU1LDAsMS0wLjQ1LDEtMXYtMSBoMTJ2MWMwLDAuNTUsMC40NSwxLDEsMWgxYzAuNTUsMCwxLTAuNDUsMS0xdi04TDE4LjkyLDYuMDF6IE03LjUsMTZDNi42NywxNiw2LDE1LjMzLDYsMTQuNVM2LjY3LDEzLDcuNSwxM1M5LDEzLjY3LDksMTQuNSBTOC4zMywxNiw3LjUsMTZ6IE0xNi41LDE2Yy0wLjgzLDAtMS41LTAuNjctMS41LTEuNXMwLjY3LTEuNSwxLjUtMS41czEuNSwwLjY3LDEuNSwxLjVTMTcuMzMsMTYsMTYuNSwxNnogTTUuODEsMTBsMS4wNC0zaDEwLjI5IGwxLjA0LDNINS44MXoiLz48L2c+PC9zdmc+';

// Core, Team, and Official extension classes should be registered statically with the Extension Manager.
// See: scratch-vm/src/extension-support/extension-manager.js
class Scratch3YoloBitRover {

    getInfo () {
        return {
            id: 'YoloBitRoverExtension',
            parentMode: 'yolo:bit',
            name: 'Rover',
            blockIconURI: iconURL,
            color1: '#cb2026',
            color2: '#cb2026',
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
                            type: Scratch.ArgumentType.NUMBER,
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
                            default: 'di chuyển [DIR] với tốc độ [SPEED] (0-100) trong [TIME_DELAY] giây',
                            id: "gui.externalExtension.YoloBitRoverExtension.rover_move_delay"
                        }
                    ],
                    arguments: {
                        DIR: {
                            menu: 'dirs'
                        },
                        SPEED: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: 50
                        },
                        TIME_DELAY: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: 1
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
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: 50
                        },
                        RIGHT: {
                            type: Scratch.ArgumentType.NUMBER,
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
                            type: Scratch.ArgumentType.NUMBER,
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
                            default: 'quay servo 360 chân [PINS] với tốc độ [VALUE] (-100 đến 100)',
                            id: "gui.externalExtension.YoloBitRoverExtension.rover_servo_360"
                        }
                    ],
                    arguments: {
                        PINS: {
                            menu: 'servo_pins'
                        },
                        VALUE: {
                            type: Scratch.ArgumentType.NUMBER,
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
                    disableMonitor: true,
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
                    disableMonitor: true,
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
                            type: Scratch.ArgumentType.NUMBER,
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
                            type: Scratch.ArgumentType.NUMBER,
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
                            type: Scratch.ArgumentType.STATEMENT
                        }
                    },
                    disablePreviousStatement: true,
                    disableNextStatement: true,
                    blockType: Scratch.BlockType.CUSTOM
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