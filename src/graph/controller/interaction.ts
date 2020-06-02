import each from '@antv/util/lib/each';
import isArray from '@antv/util/lib/is-array';
import { createInteraction } from '@antv/interaction'
import Graph from '../graph';

export default class InteractionController {
  private graph: Graph;

  public destroyed: boolean;

  /**
   * modes = [ 'drag-node', 'zoom-canvas' ]
   *
   * @private
   * @type {string[]}
   */
  public modes: string[];

  constructor(graph: Graph) {
    this.graph = graph;
    this.destroyed = false;
    this.modes = graph.get('imodes') || [];

    this.setInteraction()
  }

  private setInteraction() {
    const { graph } = this;
    const modes = this.modes;
    each(modes || [], mode => {
      const interaction = createInteraction(mode)
      interaction.bind(graph)
    });
  }

  public getModes(): string[] {
    return this.modes;
  }

  /**
   * 动态增加或删除 interaction
   *
   * @param { string[] | string } modes
   * @param {boolean} isAdd
   * @returns {Mode}
   * @memberof Mode
   */
  public manipulateInteraction(
    modes: string[] | string,
    isAdd: boolean,
  ): InteractionController {

    if (isArray(modes)) {
      each(modes, mode => {
        if (!this.modes[mode]) {
          if (isAdd) {
            this.modes.push(mode);
          }
        } else if (!isAdd) {
          const index = this.modes.indexOf(mode)
          if (index !== -1) {
            this.modes.splice(index, 1)
          }
        }
      });

      return this;
    }

    if (!this.modes[modes]) {
      if (isAdd) {
        this.modes.push(modes);
      }
    } else if (!isAdd) {
      const index = this.modes.indexOf(modes)
      if (index !== -1) {
        this.modes.splice(index, 1)
      }
    }

    return this;
  }

  public destroy() {
    (this.graph as Graph | null) = null;
    each(this.modes, mode => {
      const interaction = createInteraction(mode)
      interaction.destroy()
    })
    this.modes.length = 0;
    this.destroyed = true;
  }
}