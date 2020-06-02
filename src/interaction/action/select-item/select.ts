import each from '@antv/util/lib/each'
import ActionBase from '../base'
import { IGraph } from '../../../interface/graph'
import { INode } from '../../../interface/item'

export default class Select extends ActionBase {
  click() {
    const event = this.context.event
    const item = event.item as INode

    const graph: IGraph = this.getGraph()

    const selected = graph.findAllByState('node', 'selected');
    each(selected, node => {
      if (node !== item) {
        graph.setItemState(node, 'selected', false);
      }
    })

    if (item.hasState('selected')) {
      graph.setItemState(item, 'selected', false)

      const selectedNodes = graph.findAllByState('node', 'selected')
      graph.emit('nodeselectchange', {
        target: item,
        selectedItems: { nodes: selectedNodes },
        select: false,
      })
    } else {
      graph.setItemState(item, 'selected', true)
      const selectedNodes = graph.findAllByState('node', 'selected')
      graph.emit('nodeselectchange', {
        target: item,
        selectedItems: { nodes: selectedNodes },
        select: true,
      })
    }
  }

  process() {
    const event = this.context.event
    const item = event.item as INode

    const graph: IGraph = this.getGraph()
    graph.setItemState(item, 'selected', true)
  }

  /**
   * 取消当前选中状态
   */
  start() {
    const event = this.context.event
    const item = event.item as INode

    const graph: IGraph = this.getGraph()

    graph.setItemState(item, 'selected', true)
    const selected = graph.findAllByState('node', 'selected');
    each(selected, node => {
      if (node !== item) {
        graph.setItemState(node, 'selected', false);
      }
    })
  }

  /**
   * 清除所有的选中状态
   */
  clear() {
    const graph: IGraph = this.getGraph()

    const selected = graph.findAllByState('node', 'selected');
    each(selected, node => {
      graph.setItemState(node, 'selected', false);
    })
  }
}