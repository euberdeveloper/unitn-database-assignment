import sys
import time
import psycopg2

def get_connection():
    return psycopg2.connect("dbname='db_232' user='db_232'" + "host='sci-didattica.unitn.it' password='Vivaintereacdc1!?'")

def query_1():
    conn = get_connection()
    cur = conn.cursor()

    start = time.time_ns()

    cur.execute('''{{QUERY_1}}''')
    conn.commit()

    end = time.time_ns()
    print ('Step 1 needs ' + str((end - start)) + ' ns')

    conn.close()

def query_2():
    conn = get_connection()
    cur = conn.cursor()

    start = time.time_ns()

    cur.execute('''{{QUERY_2}}''')
    conn.commit()

    end = time.time_ns()
    print ('Step 2 needs ' + str((end - start)) + ' ns')

    conn.close()

def query_3():
    conn = get_connection()
    cur = conn.cursor()
    start = time.time_ns()
    cur.execute('''{{QUERY_3_1}}''')
    conn.commit()
    conn.close()

    conn = get_connection()
    cur = conn.cursor()
    cur.execute('''{{QUERY_3_2}}''')
    conn.commit()
    conn.close()

    conn = get_connection()
    cur = conn.cursor()
    cur.execute('''{{QUERY_3_3}}''')
    conn.commit()
    conn.close()

    conn = get_connection()
    cur = conn.cursor()
    cur.execute('''{{QUERY_3_4}}''')
    conn.commit()
    conn.close()

    conn = get_connection()
    cur = conn.cursor()
    cur.execute('''{{QUERY_3_5}}''')
    conn.commit()
    conn.close()

    conn = get_connection()
    cur = conn.cursor()
    cur.execute('''{{QUERY_3_6}}''')
    conn.commit()
    conn.close()

    conn = get_connection()
    cur = conn.cursor()
    cur.execute('''{{QUERY_3_7}}''')
    conn.commit()
    conn.close()

    conn = get_connection()
    cur = conn.cursor()
    cur.execute('''{{QUERY_3_8}}''')
    conn.commit()
    conn.close()

    conn = get_connection()
    cur = conn.cursor()
    cur.execute('''{{QUERY_3_9}}''')
    conn.commit()
    conn.close()

    conn = get_connection()
    cur = conn.cursor()
    cur.execute('''{{QUERY_3_10}}''')
    conn.commit()
    conn.close()

    conn = get_connection()
    cur = conn.cursor()
    cur.execute('''{{QUERY_3_11}}''')
    conn.commit()
    conn.close()

    conn = get_connection()
    cur = conn.cursor()
    cur.execute('''{{QUERY_3_12}}''')
    conn.commit()
    conn.close()

    conn = get_connection()
    cur = conn.cursor()
    cur.execute('''{{QUERY_3_13}}''')
    conn.commit()
    conn.close()

    conn = get_connection()
    cur = conn.cursor()
    cur.execute('''{{QUERY_3_14}}''')
    conn.commit()
    conn.close()

    conn = get_connection()
    cur = conn.cursor()
    cur.execute('''{{QUERY_3_15}}''')
    conn.commit()
    conn.close()

    conn = get_connection()
    cur = conn.cursor()
    cur.execute('''{{QUERY_3_16}}''')
    conn.commit()
    conn.close()

    conn = get_connection()
    cur = conn.cursor()
    cur.execute('''{{QUERY_3_17}}''')
    conn.commit()
    conn.close()

    conn = get_connection()
    cur = conn.cursor()
    cur.execute('''{{QUERY_3_18}}''')
    conn.commit()
    conn.close()

    conn = get_connection()
    cur = conn.cursor()
    cur.execute('''{{QUERY_3_19}}''')
    conn.commit()
    conn.close()

    conn = get_connection()
    cur = conn.cursor()
    cur.execute('''{{QUERY_3_20}}''')
    conn.commit()
    conn.close()

    end = time.time_ns()
    print ('Step 3 needs ' + str((end - start)) + ' ns')

def query_4():
    conn = get_connection()
    cur = conn.cursor()
    start = time.time_ns()
    cur.execute('''{{QUERY_4_1}}''')
    conn.commit()
    conn.close()

    conn = get_connection()
    cur = conn.cursor()
    cur.execute('''{{QUERY_4_2}}''')
    conn.commit()
    conn.close()

    conn = get_connection()
    cur = conn.cursor()
    cur.execute('''{{QUERY_4_3}}''')
    conn.commit()
    conn.close()

    conn = get_connection()
    cur = conn.cursor()
    cur.execute('''{{QUERY_4_4}}''')
    conn.commit()
    conn.close()

    conn = get_connection()
    cur = conn.cursor()
    cur.execute('''{{QUERY_4_5}}''')
    conn.commit()
    conn.close()

    conn = get_connection()
    cur = conn.cursor()
    cur.execute('''{{QUERY_4_6}}''')
    conn.commit()
    conn.close()

    conn = get_connection()
    cur = conn.cursor()
    cur.execute('''{{QUERY_4_7}}''')
    conn.commit()
    conn.close()

    conn = get_connection()
    cur = conn.cursor()
    cur.execute('''{{QUERY_4_8}}''')
    conn.commit()
    conn.close()

    conn = get_connection()
    cur = conn.cursor()
    cur.execute('''{{QUERY_4_9}}''')
    conn.commit()
    conn.close()

    conn = get_connection()
    cur = conn.cursor()
    cur.execute('''{{QUERY_4_10}}''')
    conn.commit()
    conn.close()

    conn = get_connection()
    cur = conn.cursor()
    cur.execute('''{{QUERY_4_11}}''')
    conn.commit()
    conn.close()

    conn = get_connection()
    cur = conn.cursor()
    cur.execute('''{{QUERY_4_12}}''')
    conn.commit()
    conn.close()

    conn = get_connection()
    cur = conn.cursor()
    cur.execute('''{{QUERY_4_13}}''')
    conn.commit()
    conn.close()

    conn = get_connection()
    cur = conn.cursor()
    cur.execute('''{{QUERY_4_14}}''')
    conn.commit()
    conn.close()

    conn = get_connection()
    cur = conn.cursor()
    cur.execute('''{{QUERY_4_15}}''')
    conn.commit()
    conn.close()

    conn = get_connection()
    cur = conn.cursor()
    cur.execute('''{{QUERY_4_16}}''')
    conn.commit()
    conn.close()

    conn = get_connection()
    cur = conn.cursor()
    cur.execute('''{{QUERY_4_17}}''')
    conn.commit()
    conn.close()

    conn = get_connection()
    cur = conn.cursor()
    cur.execute('''{{QUERY_4_18}}''')
    conn.commit()
    conn.close()

    conn = get_connection()
    cur = conn.cursor()
    cur.execute('''{{QUERY_4_19}}''')
    conn.commit()
    conn.close()

    conn = get_connection()
    cur = conn.cursor()
    cur.execute('''{{QUERY_4_20}}''')
    conn.commit()
    conn.close()

    end = time.time_ns()
    print ('Step 4 needs ' + str((end - start)) + ' ns')

def query_5():
    conn = get_connection()
    cur = conn.cursor()

    start = time.time_ns()

    cur.execute('''{{QUERY_5}}''')
    for el in cur.fetchall():
        sys.stderr.write(str(el[0]) + '\n')

    end = time.time_ns()
    print ('Step 5 needs ' + str((end - start)) + ' ns')

    conn.close()

def query_6():
    conn = get_connection()
    cur = conn.cursor()

    start = time.time_ns()

    cur.execute('''{{QUERY_6}}''')
    conn.commit()

    end = time.time_ns()
    print ('Step 6 needs ' + str((end - start)) + ' ns')

    conn.close()

def query_7():
    conn = get_connection()
    cur = conn.cursor()

    start = time.time_ns()

    cur.execute('''{{QUERY_7}}''')
    for el in cur.fetchall():
        sys.stderr.write(str(el) + '\n')

    end = time.time_ns()
    print ('Step 7 needs ' + str((end - start)) + ' ns')

    conn.close()

def query_8():
    conn = get_connection()
    cur = conn.cursor()

    start = time.time_ns()

    cur.execute('''{{QUERY_8}}''')
    conn.commit()

    end = time.time_ns()
    print ('Step 8 needs ' + str((end - start)) + ' ns')

    conn.close()

def query_9():
    conn = get_connection()
    cur = conn.cursor()

    start = time.time_ns()

    cur.execute('''{{QUERY_9}}''')
    for el in cur.fetchall():
        sys.stderr.write(str(el) + '\n')

    end = time.time_ns()
    print ('Step 9 needs ' + str((end - start)) + ' ns')

    conn.close()

def query_10():
    conn = get_connection()
    cur = conn.cursor()

    start = time.time_ns()

    cur.execute('''{{QUERY_10}}''')
    conn.commit()

    end = time.time_ns()
    print ('Step 10 needs ' + str((end - start)) + ' ns')

    conn.close()

def query_11():
    conn = get_connection()
    cur = conn.cursor()

    start = time.time_ns()

    cur.execute('''{{QUERY_11}}''')
    for el in cur.fetchall():
        sys.stderr.write(str(el) + '\n')

    end = time.time_ns()
    print ('Step 11 needs ' + str((end - start)) + ' ns')

    conn.close()

query_1()
query_2()
query_3()
query_4()
query_5()
query_6()
query_7()
query_8()
query_9()
query_10()
query_11()