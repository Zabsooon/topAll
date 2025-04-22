class Node {
    constructor(value)
    {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor()
    {
        this.head = null;
    }

    /**
     * Adds new node to the end of the list.
     * @param value - The value of the new node.
     */
    append(value)
    {
        let newnode = new Node(value);
        if(!this.head)
        {
            this.head = newnode;
            return;
        }
        let current = this.head;
        while(current.next)
        {
            current = current.next;
        }
        current.next = newnode;
    }

    /**
     * Adds new node to the start of the list.
     * @param value - The value of the new node.
     */
    prepend(value)
    {
        let temp = null;
        if(this.head)
        {
            temp = this.head;
        }
        this.head = new Node(value);
        this.head.next = temp;
    }

    /**
     * Return the total number of nodes in the list.
     */
    size()
    {
        let counter = 0;
        let current = this.head;
        while(current)
        {
            counter++;
            current = current.next;
        }
        return counter;
    }

    /**
     * Return the first node in the list.
     */
    head()
    {
        return this.head;
    }

    /**
     * Return the last node in the list.
     */
    tail()
    {
        /* not sure if we really need to check that */
        if(!this.head)
        {
            return null;
        }
        let lastnode = this.head;
        while(lastnode.next)
        {
            lastnode = lastnode.next;
        }
        return lastnode;
    }

    /**
     * Return the node at a given index.
     * @param {int} index - Index of the node in list.
     */
    at(index)
    {
        let node = this.head;
        if( index === 0 )
            return node;
        while(index > 0)
        {
            index--;
            node = node.next;
        }
    }

    /**
     * Removes the last element from the list.
     */
    pop()
    {
        let current = this.head;
        let previous = null;
        while(current.next)
        {
            previous = current;
            current = current.next;
        }
        previous.next = null;
    }

    /**
     * Returns true if the passed in value is in the list and otherwise returns false.
     * @param value - Value to be checked if present in list.
     */
    contains(value)
    {
        let current = this.head;
        while(current)
        {
            if(current.value === value)
                return true;
            current = current.next;
        }
        return false;
    }

    /**
     * Returns the index of the node containing value, or null if not found.
     */
    find(value)
    {
        let index = 0;
        let current = this.head;
        while(current)
        {
            if(current.value === value)
                return index;
            index++;
            current = current.next;
        }
        return null;
    }

    /**
     * Represents LinkedList node objects as strings.
     */
    toString()
    {
        let string = "";
        let current = this.head;
        if(current === null)
            return null;
        while(current.next)
        {
            string += `{ ${current.value} } -> `;
            current = current.next;
        }
        string += `{ ${current.value} } -> null`;
        return string;
    }
}

export default LinkedList;
