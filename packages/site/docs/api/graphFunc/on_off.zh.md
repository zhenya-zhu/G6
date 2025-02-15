---
title: 事件绑定/解绑
order: 9
---

### graph.on(eventName, handler)

为图绑定事件监听。

**参数**

| 名称      | 类型     | 是否必选 | 描述                                               |
| --------- | -------- | -------- | -------------------------------------------------- |
| eventName | string   | true     | 事件名，可选事件名参见 [Event](/zh/docs/api/Event) |
| handler   | Function | true     | 监听函数                                           |

这里对 `handler` 的参数 `evt` 中 `item` 和 `target` 参数进行解释：

| 名称 | 类型 | 是否必选 | 描述 |
| --- | --- | --- | --- |
| item | Item | true | 被操作的 item |
| target | Ishape | true | 被操作的具体[图形](/zh/docs/manual/middle/elements/shape-keyshape) |

**用法**

```javascript
// 为图上的所有节点绑定点击监听
graph.on('node:click', (evt) => {
  const item = evt.item; // 被操作的节点 item
  const target = evt.target; // 被操作的具体图形
  // ...
});

// 为画布绑定点击监听
graph.on('click', (evt) => {
  // ...
});
```

### graph.emit(eventName, params)

手动触发某个事件。类似于 dispatch。

**参数**

| 名称      | 类型     | 是否必选 | 描述                                               |
| --------- | -------- | -------- | -------------------------------------------------- |
| eventName | string   | true     | 事件名，可选事件名参见 [Event](/zh/docs/api/Event)。也可以是自定事件名，同样通过 graph.on 监听该事件名 |
| params   | object | true     | 触发该事件的参数。若用于触发 [Event](/zh/docs/api/Event) 中的事件，可能需要模拟一些必要的[事件参数](zh/docs/api/Event#交互事件) |

**用法**

```javascript
const node = graph.findById('node1');
// 模拟触发节点点击事件
graph.emit('node:click', {
  item: node, // 被点击的节点
  target: node.getKeyShape(), // 具体图形，这里使用了节点的 keyShape，也可以是该节点 node.getContainer() 图形分组中的其它图形
  x: 10,
  y: 10
  // ...
})

// 模拟触发一个自定义名为 someevent 的事件，并传入自定义参数
// 使用 graph.on('someevent', e => {}) 可监听该事件。注意，请在该事件触发之前绑定监听（graph.on）
graph.emit('someevent', {
  name: 'xxx',
  value: 'xxx'
});

```
### graph.off(eventName, handler)

为图解除指定的事件监听。

**参数**

| 名称      | 类型     | 是否必选 | 描述                                               |
| --------- | -------- | -------- | -------------------------------------------------- |
| eventName | string   | true     | 事件名，可选事件名参见 [Event](/zh/docs/api/Event) |
| handler   | Function | true     | 监听函数                                           |

这里对 `handler` 的参数 `evt` 中 `item` 和 `target` 同 [`graph.on(eventName, handler)`](#oneventname-handler)。该 `handler` 必须与绑定该事件的 `handler` 是同一对象。

**用法**

```javascript
// 监听函数
const fn = (evt) => {
  const item = evt.item; // 被操作的节点 item
  const target = evt.target; // 被操作的具体图形
  // ...
};
// 为图上的所有节点绑定点击监听
graph.on('node:click', fn);

// 解除上面的点击监听事件，注意 fn 必须是同一个对象
graph.off('node:click', fn);
```

### graph.off(eventName)

为图解除某事件的所有监听。

**参数**

| 名称      | 类型   | 是否必选 | 描述                                               |
| --------- | ------ | -------- | -------------------------------------------------- |
| eventName | string | true     | 事件名，可选事件名参见 [Event](/zh/docs/api/Event) |

**用法**

```javascript
// 监听函数
const fn1 = (evt) => {
  const item = evt.item; // 被操作的节点 item
  const target = evt.target; // 被操作的具体图形
  // ...
};
const fn2 = (evt) => {
  // ...
};
// 为图上的所有节点绑定点击监听
graph.on('node:click', fn1);
graph.on('node:click', fn2);

// 解除上面的所有节点点击监听事件
graph.off('node:click');
```

### graph.off()

为图解除所有监听。该函数无参数。

**用法**

```javascript
// 监听函数
const fn1 = (evt) => {
  // ...
};
const fn2 = (evt) => {
  // ...
};
// 为图上的所有节点绑定点击监听
graph.on('node:mouseenter', fn1);
graph.on('afteranimate', fn2);

// 解除图上所有监听事件
graph.off();
```
