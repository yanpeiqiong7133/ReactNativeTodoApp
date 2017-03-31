import { observable, computed } from 'mobx';

const todoData = observable([
  {
    id: 0,
  	name: 'Shopping in Xidan',
  	completed: true,
    valid: 1,
  }, {
    id: 1,
  	name: 'Travel to Japan',
  	completed: false,
    valid: 1,
  }, {
    id: 2,
    name: 'Travel to Thailand',
    completed: false,
    valid: 1,
  }

]);

todoData.delet = (index) => {
  todoData[index].valid = 0;
}

todoData.clearCompleted = () => {
  todoData.map( (item) => {
    if(item.completed){
      item.valid = 0;
    }
  })
}

todoData.add = (name) => {
  todoData.push({
    id: todoData.length,
    name,
    completed: false,
    valid: 1,
  })
}

todoData.check = (checked, index) => {
  todoData[index].completed = checked;
}

todoData.leftCount = computed(() => {
  return todoData.reduce((a, b) => {
    if(!b.completed && b.valid){
      return a + 1;
    } else {
      return a;
    }
  }, 0)
});

todoData.completeCount = (checked, index) => {
  return todoData.reduce((a, b) => {
    if(b.completed && b.valid){
      return a + 1;
    } else {
      return a;
    }
  }, 0)
};

todoData.sum = computed(() => {
  return todoData.reduce((a, b) => {
    if (b.valid) {
      return a + 1;
    } else {
      return a;
    }
  }, 0);
});

todoData.isSelectAll = computed(() => {
  return todoData.reduce((a, b) => {
    if (a) {
      return b.completed;
    } else {
      return a;
    }
  }, true)? 1 : 0;
});

todoData.toggleAll = (checked) => {
  todoData.map(item => {
    item.completed = checked;
  });
};

export default todoData;

