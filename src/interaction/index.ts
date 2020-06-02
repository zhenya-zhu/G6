
import {registerAction, registerInteraction, Interaction, createInteraction} from '@antv/interaction';

import MoveAction from './action/move';
import MoveDirection from './action/move-direction';
import Zoom from './action/zoom';
import { MoveNode, MoveNodeWithDelegate } from './action/move-node'
import { Select, MultiSelect, BrushSelect } from './action/select-item'
import { DelegateRect, DelegateCircle } from './action/delegate'
import { MaskRect, MaskCircle, MaskPath } from './action/mask'
import { HighlightMask } from './action/highlight'

// register action
registerAction('move', MoveAction);
registerAction('move-direction', MoveDirection);
registerAction('zoom', Zoom);
registerAction('move-node', MoveNode)
registerAction('move-node-delegate', MoveNodeWithDelegate)
registerAction('select', Select)
registerAction('multi-select', MultiSelect)
registerAction('brush-select', BrushSelect)
registerAction('delegate-rect', DelegateRect)
registerAction('delegate-circle', DelegateCircle)
registerAction('mask-rect', MaskRect)
registerAction('mask-circle', MaskCircle)
registerAction('mask-path', MaskPath)
registerAction('highlight-mask', HighlightMask)

function isWheelDown(event) {
  event.preventDefault();
  return event.originalEvent.deltaY > 0;
}

// register interaction
registerInteraction('zoom-canvas', {
  start: [
    {
      trigger: 'onWheel',
      action: 'zoom:zoom'
    }
  ]
})

registerInteraction('zoom', {
  start: [
    {
      trigger: 'mousewheel', 
      isEnable(context) {
        return isWheelDown(context.event);
      }, 
      action: 'zoom:zoomOut', 
      throttle: { 
        wait: 30, 
        leading: true, 
        trailing: false 
      }
    },
    {
      trigger: 'mousewheel', 
      isEnable(context) {
        return !isWheelDown(context.event);
      }, 
      action: 'zoom:zoomIn', 
      throttle: { 
        wait: 30, 
        leading: true, 
        trailing: false 
      }
    },
  ]
});

registerInteraction('key-move', {
  start: [
    {
      trigger: 'keydown', 
      isEnable(context) {
        context.event.preventDefault();
        return context.event.key === 'ArrowDown';
      }, 
      action: 'move-direction:down'
    },
    {
      trigger: 'keydown', 
      isEnable(context) {
        context.event.preventDefault();
        return context.event.key === 'ArrowUp';
      }, 
      action: 'move-direction:up'
    },
    {
      trigger: 'keydown', 
      isEnable(context) {
        context.event.preventDefault();
        return context.event.key === 'ArrowLeft';
      }, 
      action: 'move-direction:left'
    },
    {
      trigger: 'keydown', 
      isEnable(context) {
        context.event.preventDefault();
        return context.event.key === 'ArrowRight';
      }, 
      action: 'move-direction:right'
    },
  ]
});

registerInteraction('canvas-move', {
  start: [
    {
      trigger: 'mousedown',
      action: 'move:start',
      isEnable(context) {
        return !context.event.shape && context.event.key !== 'shift';
      }
    }
  ],
  processing: [
    {
      trigger: 'mousemove',
      action: 'move:move'
    }
  ],
  end: [
    {
      trigger: 'mouseup',
      action: 'move:end'
    }
  ]
})

registerInteraction('drag-node', {
  start: [
    {
      trigger: 'node:dragstart',
      action: ['move-node:start', 'delegate-circle:create'],
      isEnable(context) {
        return !!context.event.shape
      }
    }
  ],
  processing: [
    {
      trigger: 'node:drag',
      action: ['delegate-circle:move']
    }
  ],
  end: [
    {
      trigger: 'node:dragend',
      action: ['delegate-circle:end', 'move-node:move', 'move-node:end']
    }
  ]
})

registerInteraction('select', {
  start: [
    {
      trigger: 'node:click',
      action: ['select:start']
    },
  ],
  end: [
    {
      trigger: 'canvas:click',
      action: 'select:clear'
    }
  ]
})

registerInteraction('multi-select', {
  start: [
    {
      trigger: 'node:click',
      action: ['multi-select:click']
    },
    {
      trigger: 'keydown',
      isEnable(context) {
        debugger
        context.event.preventDefault();
        return context.event.key === 'Shift';
      }, 
      action: ['select:process']
    },
    {
      trigger: 'node:click',
      isEnable(context) {
        debugger
        context.event.preventDefault();
        return context.event.key === 'Shift';
      }, 
      action: ['select:process']
    }
  ],
  end: [
    {
      trigger: 'canvas:click',
      action: 'select:clear'
    }
  ]
})

registerInteraction('brush-select', {
  start: [
    {
      trigger: 'mousedown',
      isEnable(context) {
        return !context.event.shape;
      },
      action: ['mask-rect:start', 'brush-select:start'],
    },
  ],
  processing: [
    {
      trigger: 'mousemove',
      action: ['mask-rect:resize']
    },
  ],
  end: [
    // TODO mouseup 和 canvas:click 冲突
    {
      trigger: 'mouseup',
      action: ['brush-select:select', 'mask-rect:clear']
    },
    {
      trigger: 'canvas:click',
      action: 'brush-select:clear'
    }
  ]
})

registerInteraction('brush-select-circle', {
  start: [
    {
      trigger: 'mousedown',
      action: ['mask-circle:start', 'brush-select:start'],
    },
  ],
  processing: [
    {
      trigger: 'mousemove',
      action: ['mask-circle:resize']
    },
  ],
  end: [
    {
      trigger: 'mouseup',
      action: ['brush-select:select', 'mask-circle:clear']
    }
  ]
})

registerInteraction('brush-select-path', {
  start: [
    {
      trigger: 'mousedown',
      action: ['mask-path:start', 'mask-path:show', 'highlight-mask:start'],
    },
  ],
  processing: [
    
    {
      trigger: 'mousemove',
      isEnable(context) {
        const  hasPathAction = context.actions[0].starting
        return hasPathAction
      },
      action: ['mask-path:addPoint', 'highlight-mask:highlight']
    },
  ],
  end: [
    {
      trigger: 'mouseup',
      action: ['mask-path:end', 'highlight-mask:clear']
    },
    {
      trigger: 'canvas:dblclick',
      action: ['mask-path:end']
    }
  ]
})

registerInteraction('drag-move', {
  start: [
    {
      trigger: 'mousedown',
      action: 'move:start'
    },
  ],
  processing: [
    {
      trigger: 'mousemove',
      action: 'move:move'
    },
  ],
  end: [
    {
      trigger: 'document:mouseup', 
      action: 'move:end'
    }
  ]
});

export {registerAction, registerInteraction, Interaction, createInteraction};
